import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import useAuth from '../../context/Authentication/AuthProvider'
import { doc, setDoc,getDoc } from "firebase/firestore"; 
import { db,auth } from '../../firebase-config';


export default function ShoppingCart({open,setOpen, productDetail}) {
  const {user,data} = useAuth();
  const [error,setError] = useState(null);

  const checkoutProceed = async ()=>{
    console.log("checkout Clicked");
    let walletBallance = data.wallet
    if (!walletBallance){
      walletBallance = 0;
    }
    if (walletBallance< productDetail.data.price){
      setError("Not enough money!");
      return;
    }
    if (!(data.address)){
      setError("No address provided!!");
      return;
    }
    if (!(data.phone)){
      setError("No phone provided!!");
      return;
    }
    
    walletBallance -= productDetail.data.price;
    let bidsAccept = productDetail.data.bidAccepted;
    bidsAccept[data.userId] = "Payment Complete"

    const ref1 = await doc(db, 'products', productDetail.prodId);
    await setDoc(ref1, { bidAccepted: bidsAccept }, { merge: true });

    const ref2 = await doc(db, 'users', data.userId);
    await setDoc(ref2, { wallet: walletBallance }, { merge: true });

    /*give money to the owner */
    const docRef = doc(db, "users", productDetail.data.owner);
    const docSnap = await getDoc(docRef);
    const dataForOwner = docSnap.data();

    let ownerWallet = dataForOwner.wallet
    if (!ownerWallet){
      ownerWallet = 0;
    }
    ownerWallet += productDetail.data.price

    const ref3 = await doc(db, 'users', productDetail.data.owner);
    await setDoc(ref3, { wallet: ownerWallet }, { merge: true });



    setOpen(false);
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Checkout cart</Dialog.Title>
                        
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                              <li key={productDetail.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={productDetail.data.pictures[0]}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={`/productDetails?id=${productDetail.id}`}>{productDetail.data.name}</a>
                                        
                                      </h3>
                                      <p className="ml-4">$ {productDetail.data.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{productDetail.data.category}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty 1</p>

                                  </div>
                                </div>
                              </li>
                        
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div style={{color:'red'}}>{error}</div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Total</p>
                        <p>$ {productDetail.data.price}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500"></p>
                      <div className="mt-6">
                        <button style={{width:'100%'}}
                          className="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-black"
                          onClick={()=>{checkoutProceed();}}
                        >
                          Checkout
                        </button>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          <button
                            type="button"
                            className="font-medium text-black"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
