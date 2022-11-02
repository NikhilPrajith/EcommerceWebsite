import { useState,useEffect } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import Navbar from '../components/Navbar/Navbar'
import { useRouter } from 'next/router'
import { db } from '../firebase-config'
import { collection, query, where, getDocs,doc,getDoc } from "firebase/firestore";
import styles from "../styles/productDetails.module.css"
import Rating from '@mui/material/Rating';
import Footer from '../components/Footer/Footer'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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
const reviews = { href: '#', average: 2, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductDetails({data}) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  useEffect(() => {
    console.log(data.pictures)
  }, [])
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Products
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"

    >
      {data.category}
    </Link>,
    <Typography key="3" color="text.primary">
      {data.name}
    </Typography>,
  ];

  return (
    <>
    <Navbar></Navbar>
    <div className="bg-white">
      <div className="pt-6">

        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8"><Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs></div>
        {/* Image gallery */}
        {data.pictures && (
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
            <img
              style={{maxHeight:'400px'}}
              src={data.pictures[0]}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
              <img
                style={{maxHeight:'200px'}}
                src={data.pictures[1]}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
              <img
                style={{maxHeight:'200px'}}
                src={data.pictures[2]}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
            <img
              style={{maxHeight:'400px'}}
              src={data.pictures[3]}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>) }

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-12">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{data.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">${data.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-blue-600 hover:text-blue-500">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <form className="mt-10">
              {/* Colors */}
              {/*
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>

                <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                  <RadioGroup.Label className="sr-only"> Choose a color </RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedClass,
                            active && checked ? 'ring ring-offset-1' : '',
                            !active && checked ? 'ring-2' : '',
                            '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                          )
                        }
                      >
                        <RadioGroup.Label as="span" className="sr-only">
                          {' '}
                          {color.name}{' '}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.class,
                            'h-8 w-8 border border-black border-opacity-10 rounded-full'
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
                          */}
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent
                 bg-black py-3 px-8 text-base font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{data.description}</p>
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
                <p className="text-sm text-gray-600">{data.detail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:gap-x-8 lg:px-8 lg:pb-24">
      <div className='flex justify-between items-center font-semibold lg:border-b lg:border-gray-200 lg:pr-8 pb-8 my-20'>
        <div className='font-semibold text-lg'>Recent reviews</div>
        <Button variant="outlined"
                className="lg:border lg:border-gray-700 rounded-md border border-transparent
                 bg-white py-2 px-8 font-light text-black hover:bg-black hover:text-white"
              >
                Write a review
        </Button>
      </div>
      <div className={styles.review}>
        <div>
            <div>Namgyal T</div>
            <div className={styles.date}>April 6, 2021</div>
        </div>
        <div>
            <div className={styles.rating}><Rating name="read-only" value={3} readOnly /><span style={{paddingLeft:'12px'}}>3</span></div>

        </div>
        <div>
            <div>Very comfy and does it's job</div>
            <div className={styles.para}>After a quick chat with customer suoport. I had a good feelina about this shirt and
              orderad thras of than Less than 48 hours later, my delivery arrived. I haven't worn anything else since that
              day! These shirts are so comfortable, yet look classy enough that I can wear them at
              work or even some formal events Winnina</div>
        </div>
      </div>
      <div className={styles.review}>
        <div>
            <div>Risko M</div>
            <div className={styles.date}>May 16, 2021</div>
        </div>
        <div>
          <div className={styles.rating}><Rating name="read-only" value={4} readOnly /><span style={{paddingLeft:'12px'}}>4</span></div>

        </div>
        <div>
            <div>Can't say enough good things</div>
            <div className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</div>
        </div>
      </div>
      <div className={styles.review}>
        <div>
            <div>Risko M</div>
            <div className={styles.date}>May 16, 2021</div>
        </div>
        <div>
          <div className={styles.rating}><Rating name="read-only" value={4} readOnly /><span style={{paddingLeft:'12px'}}>4</span></div>

        </div>
        <div>
            <div>Can't say enough good things</div>
            <div className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</div>
        </div>
      </div>
      <div className={styles.review}>
        <div>
            <div>Risko M</div>
            <div className={styles.date}>May 16, 2021</div>
        </div>
        <div>
          <div className={styles.rating}><Rating name="read-only" value={4} readOnly /><span style={{paddingLeft:'12px'}}>4</span></div>

        </div>
        <div>
            <div>Can't say enough good things</div>
            <div className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export async function getServerSideProps(context) {
  const getData1 = async ()=>{
    const id = await context.query.id;
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data()

  }
  const data = await getData1();
  console.log("data",data);
  return {
    props: {
          data: data
      }, // will be passed to the page component as props
  }

}

