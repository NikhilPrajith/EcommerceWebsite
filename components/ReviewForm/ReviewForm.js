import React, { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router'
import { getAuth, createUserWithEmailAndPassword,updateProfile, signOut } from "firebase/auth";
import { collection,addDoc,setDoc,doc } from "@firebase/firestore";
import { auth,db } from "../../firebase-config";
import Link from "next/link";
import { Fragment} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import {format} from 'date-fns'


const ReviewForm = ({productId, open,setOpen,cancelButtonRef,name}) => {
    const [title,setTitle] = useState(null);
    const [desc,setDesc] = useState(null);
    const [category,setCategory] = useState("Product");
    const [rating, setValue] = React.useState(0);
    const router = useRouter();
    const submitReview = async ()=>{
        //Need to do error handilin
        
        const addData = await addDoc(collection(db, "reports"), {
            title: title,
            description: desc,
            name: name,
            productId:productId,
            rating:rating,
            category:category,
            date:format(new Date(), 'MM-dd-yyyy'),
        });
        setOpen(false);
        router.replace(router.asPath);

    }

    
    return (
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
                                        Subject*
                                      </label>
                                      <input
                                        required
                                        type="text"
                                        name="productName"
                                        id="product-name"
                                        onChange={(evt)=>setTitle(evt.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                                      />
                                    </div>
                                    <div className="col-span-6 sm:col-span-6">
                                      <label className="block text-sm font-medium text-gray-700">
                                        What is the report towards?*
                                      </label>
                                      <select
                                        autoComplete="country-name"
                                        onChange={(evt)=>setCategory(evt.currentTarget.value)}
                                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                                      >
                                        <option>Product</option>
                                        <option>Product Owner</option>
                                      </select>
                                    </div>
                                    <div className="col-span-6 sm:col-span-6">
                                      <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                        Rating*
                                      </label>
                                      <Rating
                                            name="simple-controlled"
                                            value={rating}
                                            onChange={(event, newValue) => {
                                            setValue(newValue);
                                            }}
                                        />
                                      <p className="mt-2 text-sm text-gray-500">
                                      </p>
                                    </div>
                                    <div className="col-span-6 sm:col-span-6">
                                      <label className="block text-sm font-medium text-gray-700">
                                        Comment*
                                      </label>
                                      <div className="mt-1">
                                        <textarea
                                          required
                                          id="description"
                                          name="description"
                                          rows={5}
                                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                                          placeholder="Enter below you issues, concerns, compliments, prasies, etc.."
                                          onChange={(evt)=>setDesc(evt.target.value)}
                                        />
                                      </div>
                                      <p className="mt-2 text-sm text-gray-500">
                                      </p>
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
                        onClick={() => submitReview()}
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
    );

}

export default ReviewForm;