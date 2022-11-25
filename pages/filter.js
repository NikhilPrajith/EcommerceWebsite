import Head from 'next/head'
import LoginForm from '../components/LoginForm/LoginForm'
import styles from "../styles/dashboard.module.css"
import { auth,db } from '../firebase-config' 
import { doc, setDoc, addDoc,collection,query,where,getDocs } from "firebase/firestore"; 
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
import Navbar from '../components/Navbar/Navbar';
import ProductGrid from '../components/Product/productGrid';


export default function Dashboard({products}) {

  const {user,data} = useAuth();
  useEffect(()=>{

  },[])

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
    });
    console.log(addData);
    setOpen(false);
  }



  return (
    <div>
        <Navbar></Navbar>
        <ProductGrid products={products} type=""></ProductGrid>
    </div>
  )
}


export async function getServerSideProps(context) {
    let type = await context.query.type;
    if(type=="School"){
        type += " Supplies"
    }
    if(type=="Beauty"){
        type += " Products"
    }
    if(type=="Kitchen"){
        type += " Appliances"
    }

    console.log(type)
    const getDataType = async ()=>{
        const q = query(collection(db, "products"), where("category", "==", type));
        const querySnapshot = await getDocs(q);
        let products = [];
        await querySnapshot.forEach((doc) => {
            const prod = {id:doc.id, data: doc.data()};
            products.push(prod);
        });
        return products;
    }
    const getAllData = async ()=>{
        const querySnapshot = await getDocs(collection(db, "products"));
        const data = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            const temp = {id:doc.id, data:doc.data()};
            data.push(temp);
        });
        return data
    }
    let products;
    if (type == "all"){
        products = await getAllData();
    }else{
        products= await getDataType(type);
    }
    return {
        props: {
            products:products,
        }, 
    }

}



