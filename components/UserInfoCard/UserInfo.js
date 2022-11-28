import React, { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router'
import styles from "./userInfo.module.css";
import {CgShoppingBag} from 'react-icons/cg'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, query, where, getDoc, doc } from "firebase/firestore";
import { auth,db } from "../../firebase-config";
import useAuth from "../../context/Authentication/AuthProvider";
import Link from "next/link";

const UserInfo = ({userName}) => {
    const router = useRouter();


    const {user,data} = useAuth();

    useEffect(()=>{

       
    })



    return (
        <div>
           <div> bsdd</div>
        </div>
    );

}

export default UserInfo;
