import React, { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router'
import {CgShoppingBag} from 'react-icons/cg'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, query, where, getDoc, doc } from "firebase/firestore";
import { auth,db } from "../../firebase-config";
import useAuth from "../../context/Authentication/AuthProvider";
import Link from "next/link";
import {IconButton, Avatar,Box, Modal,TextField,Button,Grid,Paper, Typography} from '@mui/material';
import AddCardIcon from '@mui/icons-material/AddCard';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import styles from "./UserInfo.module.css"
import {FaMoneyBillAlt} from 'react-icons/fa'

//#e0e0e05c
const UserInfo = ({userName}) => {
    const {user,data} = useAuth();
    return (
      <div className={styles.parent} style={{background:'#e0e0e05c', width:'100%', height:'250px', display:'flex', flexDirection:'column' ,alignContent:'center',justifyContent:'space-around'}}>
        <div style={{fontSize:'25px',fontWeight:'900',marginBottom:'20px'}}>User Information</div>
        <div className={styles.frame1} style={{width:'100%',fontSize:'12px'}}>
          <div><span>Name:</span> {data.name}</div>
          <div><span>Email:</span> {data.email}</div>
          <div><span>Account:</span> {data.accountType}</div>
          <div><span>Status:</span> {data.status}</div>
          <div><span>Address:</span>{data.address} {!data.address &&(<span>No address provided!</span>)}</div>
          <div><span>Phone:</span>{data.phone} {!data.address &&(<span>No phone number provided!</span>)}</div>
          <div><span>Card Number:</span> **************(click edit to view)</div>
          <div style={{display:'flex', alignItems:'center'}}><span style={{fontWeight:'900'}}>Wallet Balance:  </span>
            <span>$</span>
            {data.wallet} {!data.wallet && (0)}
          </div>
        </div>
        <div style={{width:'100%',height:'100%'}}>

        </div>
     </div>
    );
      
}

export default UserInfo;
