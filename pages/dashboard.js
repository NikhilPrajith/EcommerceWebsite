import Head from 'next/head'
import LoginForm from '../components/LoginForm/LoginForm'
import styles from "../styles/dashboard.module.css"
import { auth,db } from '../firebase-config' 
import { doc,getDoc, setDoc, addDoc,collection,query,where,getDocs } from "firebase/firestore"; 
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import NavbarTwo from "../components/Navbar/NavbarTwo"
import useAuth from '../context/Authentication/AuthProvider'
import Link from 'next/link'
import ProductApplications from '../components/ProductApplication/ProductApplication'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import TabView from "../components/DashboardTabViews/TabView"
import UserInfo from '../components/UserInfoCard/UserInfo';

import Button from '@mui/material/Button';

import EditInfoOverlay from '../components/Simpleoverlay/EditInfoOverlay';
import AddMoneyOverlay from '../components/Simpleoverlay/AddMoneyOverlay';


export default function Dashboard({products,biddedProds,reportsReviews}) {
  const router = useRouter();
  const {logout} = useAuth();
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)

  const[productName,setProductName] = useState(null);
  const[desc,setDesc] = useState(null);
  const[category,setCategory] = useState("Electronics"); //Look at alternate approaches
  const[detail,setDetails] = useState(null);
  const[pic1,setPic1] = useState(null); //Use array to remove repition
  const[pic2,setPic2] = useState(null);
  const[pic3,setPic3] = useState(null);
  const[pic4,setPic4] = useState(null);
  const[price,setPrice] = useState(null);
  const [accountInfoEditOpen, setAccountEditInfoOpen] = useState(false);

  const[addBalance,setAddBalance] = useState(false)

  //clearly not the way to do protected routing but it's simple to do this way, so why not? We, can change it later
  const {user,data} = useAuth();
  useEffect(()=>{
    console.log(data)
  },[data,biddedProds])

  const submitProductApplication  = async () => {
    //Need to do error handiling
    
    const addData = await addDoc(collection(db, "products"), {
      category: category,
      description: desc,
      detail: detail,
      name: productName,
      owner: user.uid,
      pictures: [pic1,pic2,pic3,pic4],
      price: price*1.0,
      status:'Pending'
    });
    console.log(addData);
    setOpen(false);
  }

  const replaceRouter = () =>{
    router.replace(router.asPath);
  }


  return (
    <div style={{marginBottom:'150px'}}>
        <EditInfoOverlay open={accountInfoEditOpen} setOpen={setAccountEditInfoOpen} replaceRouter={replaceRouter}></EditInfoOverlay>
        <AddMoneyOverlay open={addBalance} setOpen={setAddBalance}></AddMoneyOverlay>
        <NavbarTwo></NavbarTwo>
        <div style={{display:'flex'}}>
          <div style={{width:'80%'}}><UserInfo></UserInfo></div>
          <div style={{width:'20%'}}>
            <Button onClick={()=>{setOpen(true)}} style={{color:'black',width:'100%',padding:'20px'}} variant="text">Product Application</Button>
            <Button onClick={()=>{setAccountEditInfoOpen(true)}} style={{color:'black',width:'100%',padding:'20px'}} variant="text">Edit Information</Button>

            <Button onClick={()=>{setAddBalance(true)}} style={{color:'black',width:'100%',padding:'20px'}} variant="text">Add money</Button>

            <Button onClick={logout} style={{color:'black',width:'100%',padding:'20px'}} variant="text">Logout</Button>
          </div>
        </div>
        {(data["status"]=="Inavlid" || data["status"]=="invalid" || data["status"]=="rejected") && (<div style={{padding: '50px', backgroundColor: 'rgb(238, 238, 238)',color: 'rgb(116, 116, 116)',textAlign: 'center',borderRadius: '8px'}}>
          {data['message']}</div>)}

        {data.accountType == "Super User" &&(<Button onClick={()=>{router.push("/admin")}} style={{color:'black',width:'100%',padding:'20px'}} variant="text">Admin Dashboard</Button>)}
        {data["status"] =="active" && 
          <div>
            <div style={{fontWeight:'900',fontSize:'25px',marginLeft:'40px',marginTop:'30px'}}>Account History</div>
            <TabView products={products} bidded={biddedProds} reportsReviews={reportsReviews}></TabView>
          </div>
          
        }
        


        {/*Application for listing a product- Find a way to make it a component and pass the useState */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    </div>
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      
                      <div className="sm:flex sm:items-start">
                        
                        <div className="w-full">
                          
                          
                          <div className="">
                            <div>
                              <div className="">
                                <div className="bg-white px-4 py-5 sm:p-6">
                                  <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-6">
                                      <label htmlFor="product-name" className="block text-sm font-medium text-gray-700">
                                        Product Name*
                                      </label>
                                      <input
                                        required
                                        type="text"
                                        name="productName"
                                        id="product-name"
                                        onChange={(evt)=>setProductName(evt.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                                      />
                                    </div>
                                    <div className="col-span-6 sm:col-span-6">
                                      <label className="block text-sm font-medium text-gray-700">
                                        Description*
                                      </label>
                                      <div className="mt-1">
                                        <textarea
                                          required
                                          id="description"
                                          name="description"
                                          rows={5}
                                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                                          placeholder="Enter a brief description regarding your product"
                                          onChange={(evt)=>setDesc(evt.target.value)}
                                        />
                                      </div>
                                      <p className="mt-2 text-sm text-gray-500">
                                      </p>
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                      <label className="block text-sm font-medium text-gray-700">
                                        Category*
                                      </label>
                                      <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        onChange={(evt)=>setCategory(evt.currentTarget.value)}
                                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                                      >
                                        <option>Electronics</option>
                                        <option>School Supplies</option>
                                        <option>Home Appliances</option>
                                        <option>Beauty Products</option>
                                        <option>Clothing</option>
                                      </select>
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                      <label className="block text-sm font-medium text-gray-700">
                                        Starting Bid Price*
                                      </label>
                                      <input
                                        required
                                        type="text"
                                        name="price"
                                        id="price"
                                        placeholder='$'
                                        onChange={(evt)=>setPrice(evt.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                                      />
                                    </div>

                                    <div className="col-span-6 sm:col-span-6">
                                      <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                        Detail*
                                      </label>
                                      <div className="mt-1">
                                        <textarea
                                          required
                                          id="detail"
                                          name="detail"
                                          rows={5}
                                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                                          placeholder="Provide addittional details regarding the products such as materials used, etc..."
                                          onChange={(evt)=>setDetails(evt.target.value)}
                                        />
                                      </div>
                                      <p className="mt-2 text-sm text-gray-500">
                                      </p>
                                    </div>

                                    <div className="col-span-6 sm:col-span-6 lg:col-span-6">
                                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                        Product Images [At least 2 are required!]
                                      </label>
                                      <input
                                        type="text"
                                        name="pic1"
                                        id="pic1"
                                        onChange={(evt)=>setPic1(evt.currentTarget.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                                      />
                                      <input
                                        type="text"
                                        name="pic2"
                                        id="pic2"
                                        onChange={(evt)=>setPic2(evt.currentTarget.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                                      />
                                       <input
                                        type="text"
                                        name="pic3"
                                        id="pic3"
                                        onChange={(evt)=>setPic3(evt.currentTarget.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                                      />
                                       <input
                                        type="text"
                                        name="pic4"
                                        id="pic4"
                                        onChange={(evt)=>setPic4(evt.currentTarget.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-black px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => submitProductApplication()}
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>

    </div>
  )
}


export async function getServerSideProps(context) {

  const uid = context.query.user;
  const getData1 = async ()=>{
    const q = query(collection(db, "products"), where("owner", "==", uid));
    const querySnapshot = await getDocs(q);
    let products = [];
    await querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log("DATA :", doc.id)
      const prod = {id:doc.id, data: doc.data()};
      products.push(prod);
    });
    return products;
  }

  

  const getBiddedData = async ()=>{
    let bidded = []
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    const userData = docSnap.data();

    let bidsPlaced = []
    if("bidPlaced" in userData){
      bidsPlaced = userData['bidPlaced'];
    }
    for(const [key, value] of Object.entries(bidsPlaced)) {
      const prodRef = doc(db, "products", key);
      const prodSnap = await getDoc(prodRef);
      const prodData = prodSnap.data();
      const adding_Data = {"data":prodData,"bidPrice":value,"prodId":key};
      bidded.push(adding_Data)

    }
    return bidded;
  }

  const getData2 = async ()=>{
    const q = query(collection(db, "reports"), where("productOwner", "==", uid));
    const querySnapshot = await getDocs(q);
    let products = [];
    await querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log("DATA :", doc.id)
      const prod = {id:doc.id, data: doc.data()};
      products.push(prod);
    });
    return products;
  }
  const reviews = await getData2();
  const biddedProds = await getBiddedData();

  console.log("addd",biddedProds);
  const products = await getData1();
  return {
    props: {
        products: products,
        biddedProds: biddedProds,
        reportsReviews: reviews
      }, 
  }

}



