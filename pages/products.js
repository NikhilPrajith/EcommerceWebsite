import Head from 'next/head'
import Navbar from "../components/Navbar/Navbar"
import Banner from "../components/Banner/Banner"
import Promo from '../components/PromoSection/PromoSection'
import { auth,db } from '../firebase-config'
import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect,useState } from 'react'
import Link from 'next/link'
import Footer from '../components/Footer/Footer'
import CategoryFilter from '../components/CategoryFilters/CategoryFilters'
import ProductGrid from '../components/Product/productGrid'

function Home({prods}) {
  useEffect(() => {
    console.log(prods);
  }, [])
  const [allProducts,setAllProducts] = useState(prods);
  const [productsToShow, setProductsToShow] = useState(prods);

  const filterFunction = (query)=>{
    console.log("sadasdsa");
    console.log(query);
    if(query == ""){
      console.log("CaaseA")
      setProductsToShow(allProducts);
    }else{
      console.log("Case B")
      var filtered_data = allProducts.filter(function(item) {
        console.log(item.data.category)
        return (item.data.name.toLowerCase().includes(query.toLowerCase()) || item.data['category'].toLowerCase().includes(query.toLowerCase()));
      })
      setProductsToShow(filtered_data)
      console.log(filtered_data)
    }
  }

  return (
    <div>
      <Navbar></Navbar>
      <Banner filterFunc={(evt)=>filterFunction(evt.target.value)}></Banner>
      <ProductGrid products={productsToShow} type=""></ProductGrid>

    </div>
  )
}

export async function getServerSideProps() {
  const getData1 = async ()=>{
    const q = query(collection(db, "products"), where("status", "==", "Accepted"));
    const querySnapshot = await getDocs(q);
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