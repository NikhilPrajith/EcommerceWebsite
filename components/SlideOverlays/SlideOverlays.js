import { Fragment, useState,useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function SideOverlay({open,setOpen,data}) {
  const randomImages =["https://images.pexels.com/photos/7794363/pexels-photo-7794363.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/10974541/pexels-photo-10974541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/7193709/pexels-photo-7193709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4812934/pexels-photo-4812934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://www.pexels.com/photo/close-up-photo-of-human-figurine-on-white-background-7593080/",
      "https://images.pexels.com/photos/7214789/pexels-photo-7214789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ]
  useEffect(() => {
    console.log("asdausdhuasdajid",data);  
  }, [])

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
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-lg font-medium text-gray-900">All Bids</Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {/* Replace with your content */}
                      {data == null &&(<div style={{textAlign:'center',color:'grey'}}>No bids made!</div>)}
                      {data != null && (<div>{Object.keys(data).map((key, index) => {
                        return (
                          <div style={{width:'100%',display:'flex',height:'100px',paddingTop:'10px',paddingBottom:'10px',borderBottom:'0.8px grey solid',borderTop:'0.8px grey solid'}}>
                            <div style={{width:'100%',height:'100%',display: 'flex',flexDirection: 'column', justifyContent: 'center'}}>
                              <div>Account id:<div style={{fontWeight:'900',fontSize:'10px'}}>{key}</div></div>
                            </div>
                            <div style={{width:'30%',height:'80px',overflow:'hidden',display: 'flex',flexDirection: 'column', justifyContent: 'center'}}>
                              <div>$ {data[key]}</div>
                            </div>
                          </div>
                        );
                      })}</div>)}

                      {/* /End replace */}
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
