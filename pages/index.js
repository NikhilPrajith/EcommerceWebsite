import Head from 'next/head'
import Navbar from "../components/Navbar/Navbar"
import Banner from "../components/Banner/Banner"
import ProductList from "../components/Product/productList"
import Promo from '../components/PromoSection/PromoSection'
import { auth,db } from '../firebase-config'
import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect } from 'react'
import Footer from '../components/Footer/Footer'
import CategoryFilter from '../components/CategoryFilters/CategoryFilters'

function Home({prods}) {
  useEffect(() => {
    console.log(prods);
  }, [])
  

  const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
  ]

  return (
    <div>
      <Navbar></Navbar>
      <Promo></Promo>
      {/*<Banner></Banner>*/}
      {/*<ProductList products={prods}></ProductList>*/}
      <CategoryFilter products={prods} ></CategoryFilter>

      <Footer></Footer>

    </div>
  )
}

export async function getServerSideProps() {
  const getData1 = async ()=>{
    const querySnapshot = await getDocs(collection(db, "products"));
    const data = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const temp = {id:doc.id, data:doc.data()};
        data.push(temp);
    });
    return data
  }
  const data = await getData1();
  return {
    props: {
          prods: data
      }, // will be passed to the page component as props
  }

}

export default Home