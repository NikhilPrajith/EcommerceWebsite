import {Fragment, useState,useEffect, useRef } from 'react'
import * as React from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import Navbar from '../components/Navbar/Navbar'
import { useRouter } from 'next/router'
import { db,auth } from '../firebase-config'
import { collection, query, where, getDocs,doc,getDoc,setDoc } from "firebase/firestore";
import styles from "../styles/productDetails.module.css"
import Rating from '@mui/material/Rating';
import Footer from '../components/Footer/Footer'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/joy/TextField';
import Chip from '@mui/joy/Chip';
import useAuth from '../context/Authentication/AuthProvider'
import Box from '@mui/joy/Box';
import Alert from '@mui/joy/Alert';
import SideOverlay from '../components/SlideOverlays/SlideOverlays';
import ReviewForm from '../components/ReviewForm/ReviewForm';

/* For later: every change to the dahboard is edited on screen by auto refreshing the page */


const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductDetails({reviews, prodData,highestBidder,productId}) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  const [open, setOpen] = useState(false);
  const[bidPrice,setBidPrice] = useState(null);
  const [bidSubmissionError, setbidSubmissionError] = useState(null);
  const {user,data} = useAuth();
  const cancelButtonRef = useRef(null);
  const router = useRouter();
  const [overlayOpen,setOverlayOpen] = useState(false);
  const [reviewOpen,setReviewOpen] = useState(false);
  const reviewCancelButtonRef = useRef(null);


  useEffect(() => {
  }, [])
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/filter?type=all">
      Products
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href={`/filter?type=${prodData.category}`}

    >
      {prodData.category}
    </Link>,
    <Typography key="3" color="text.primary">
      {prodData.name}
    </Typography>,
  ];

  const bidSubmission  = async () =>{
    if(isNaN(bidPrice)|| bidPrice == null || bidPrice*1.0 <= prodData.price){
      setbidSubmissionError("Invalid bid. Please check your value!")
    }else{
      
      setbidSubmissionError("");
      let bids={}
      if ("Bids" in prodData){
        bids = prodData["Bids"];
      }
      bids[user.uid] = bidPrice*1.0;

      const productRef = doc(db, 'products',productId );
      await setDoc(productRef, { price: bidPrice*1.0, Bids:bids }, { merge: true });

      const userRef = doc(db, 'users', user.uid);
      let bidPlaced={}
      if ("bidPlaced" in user){
        bidPlaced = user["bidPlaced"];
      }
      bidPlaced[productId] = bidPrice*1.0;

      setDoc(userRef, { bidPlaced:bidPlaced}, { merge: true });  
      setOpen(false);
      router.replace(router.asPath);
     return;

    }
  }

  return (
    <>
    <ReviewForm productId={productId} name={data['name']} open={reviewOpen} setOpen={setReviewOpen} cancelButtonRef={reviewCancelButtonRef}></ReviewForm>
    <Navbar></Navbar>
    <div className="bg-white">
      <div className="pt-6">

        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8"><Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs></div>
        {/* Image gallery */}
        {prodData.pictures && (
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
            <img
              style={{maxHeight:'400px'}}
              src={prodData.pictures[0]}
              className="h-full w-full object-cover object-center"
            />
          </div>
          {prodData.pictures[1] &&(<div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          {prodData.pictures[1] &&(<div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
              <img
                style={{ maxHeight: !prodData.pictures[2]? '400px': '200px'}}
                src={prodData.pictures[1]}
                className="h-full w-full object-cover object-center"
              />
            </div>)}
            {prodData.pictures[2] &&(<div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
              <img
                style={{maxHeight:'200px'}}
                src={prodData.pictures[2]}
                className="h-full w-full object-cover object-center"
              />
            </div>)}
          </div>)}
          {prodData.pictures[3] &&(<div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
            <img
              style={{maxHeight:'400px'}}
              src={prodData.pictures[3]}
              className="h-full w-full object-cover object-center"
            />
          </div>)}
        </div>) }

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-12">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{prodData.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            { user && (highestBidder[1] === user.uid) &&(
              <Alert style={{backgroundColor:'#DDF1FF',textAlign:'center',marginBottom:'10px'}} color="primary" size="sm" >You are the highest bidder</Alert>)}
            <p style={{marginBottom:'10px'}}className="text-3xl tracking-tight text-gray-900"><div 
              style={{fontSize: '14px',color: 'rgb(145, 145, 145)'}}
              className="text-xl tracking-tight text-gray-900">Highest bid:</div> ${prodData.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews[1] > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews[1]} out of 5 stars</p>
                <a className="ml-3 text-sm font-medium text-blue-600 hover:text-blue-500">
                  {reviews[0].length} reviews
                </a>
              </div>
            </div>
            <div style={{marginTop:'25px',color: 'rgb(145, 145, 145)'}}>
                <span>Highest bidder:</span> {highestBidder[0]}

            </div>

            <div className="mt-10">
              {user && (<button
                type="submit"
                onClick={()=>{prodData['owner'] != user.uid && setOpen(true)}}
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent
                 bg-black py-3 px-8 text-base font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"

                style={{opacity: prodData['owner'] != user.uid? '1': '0.5',cursor: prodData['owner'] != user.uid? 'pointer': 'auto'}}
              >
                Place a bid
              </button>)}
              <div onClick={()=>{setOverlayOpen(true)}} style={{cursor:'pointer',color: 'rgb(59 130 246)',fontSize: '13px',marginTop: '20px'}}>View all bids</div>


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
                          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                              
                              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                  Type bid value
                                </Dialog.Title>
                                <div className="mt-2">
                                  <p className="text-sm text-gray-500">
                                    Make sure to be certain of the value you input for placing a bid on this product!
                                  </p>
                                </div>
                                
                                <div fullWidth style={{marginTop:'30px'}}>
                                <div style={{marginBottom:'10px', fontSize:'12px', color:'red'}}>{bidSubmissionError}</div>
                                  <TextField label="" placeholder="Type in here…" variant="outlined"
                                    onChange={(evt)=>setBidPrice(evt.target.value)}
                                    startDecorator={
                                      <Chip style={{borderRadius:'10px'}} size="sm" variant="soft">
                                         $
                                      </Chip>
                                    }
                                  /></div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                              type="button"
                              className="inline-flex w-full justify-center rounded-md border border-transparent bg-black px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                              onClick={() => bidSubmission()}
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
          </div>  
          {/*SlideOverlay for all bids*/}
          <SideOverlay open={overlayOpen} setOpen={setOverlayOpen} prodData={prodData['Bids']}></SideOverlay>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{prodData.description}</p>
              </div>
            </div>
            {/*Highlights
            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            */}
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{prodData.detail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:gap-x-8 lg:px-8 lg:pb-24">
      <div className='flex justify-between items-center font-semibold lg:border-b lg:border-gray-200 lg:pr-8 pb-8 my-20'>
        <div className='font-semibold text-lg'>Recent reviews</div>
        <Button onClick={()=>{setReviewOpen(true)}} variant="outlined" 
              >
                Write a review
        </Button>
      </div>
      {reviews[0].map((review) => (
              <div className={styles.review}>
              <div>
                  <div>{review['name']}</div>
                  <div className={styles.date}>{review.date}</div>
              </div>
              <div>
                  <div className={styles.rating}><Rating name="read-only" value={review['rating']} readOnly /><span style={{paddingLeft:'12px'}}>{review['rating']}</span></div>
      
              </div>
              <div>
                  <div>{review.title}</div>
                  <div className={styles.para}>{review.description}</div>
              </div>
            </div>
      ))}
      {reviews[0].length ==0 &&(<div style={{padding: '50px', backgroundColor: 'rgb(238, 238, 238)',color: 'rgb(116, 116, 116)',textAlign: 'center',borderRadius: '8px'}}>
        Be the first to leave a review!</div>)}
    </div>
    <Footer></Footer>
    </>
  )
}

export async function getServerSideProps(context) {
  const id = await context.query.id;
  const getData1 = async ()=>{
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data()

  }
  const data = await getData1();

  const getReviews = async () =>{
    const q = query(collection(db, "reports"), where("productId", "==", id));
    const querySnapshot = await getDocs(q);
    let reviews =[];
    let count = 0;
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      const reviewData = doc.data();
      if (reviewData['category'] == 'Product'){
        reviews.push(doc.data())
        count+=reviewData['rating']
      }
    });

    return [reviews,Math.floor(count/reviews.length)]
  
  }
  const reviewDetails= await getReviews();

  console.log("data",data);
  let bidder = "No bids!"
  let bidderId ="";
  if ("Bids" in data){
    console.log("bids exist");
    let maxKey, maxValue = 0;
    for(const [key, value] of Object.entries(data["Bids"])) {
      if(value > maxValue) {
        maxValue = value;
        maxKey = key;
      }
    }
    bidderId = maxKey;
    const userRef = doc(db, "users", maxKey);
    const docSnap = await getDoc(userRef);
    const temp =  docSnap.data();
    bidder = temp['name'];

  }
  return {
    props: {
          prodData: data,
          highestBidder: [bidder,bidderId],
          productId: id,
          reviews: reviewDetails,

      }, // will be passed to the page component as props
  }

}


/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
