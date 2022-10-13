import React, { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router'
import styles from "./ApplicationsCard.module.css";
import { doc, setDoc, updateDoc } from "firebase/firestore"; 
import { db } from "../../firebase-config";


const ApplicationsCard = ({apps, approve, reject}) => {
    const router = useRouter();
    const approveUser= async (uid)=>{
        console.log(uid);
        await updateDoc(doc(db, "users", uid), {
            status:'active'
          });
        router.replace(router.asPath);
    };
    const rejectUser= async (uid)=>{
        console.log(uid);
        await updateDoc(doc(db, "users", uid), {
            status:'invalid'
          });
        router.replace(router.asPath);
    };


    return (
        <>
            {apps?.map(k => (
                <div className={styles.card}>
                    <div className={styles.cardLeft}>
                        <div className={styles.name}>{k['data'].name}</div>
                        <div className={styles.email}>{k['data'].email}</div>
                        <div className="">{k['data'].accountType}</div>
                        <div className={k['data'].status =='active' ? styles.active:styles.invalid}>{k['data'].status}</div>
                    </div>
                    <div className={styles.cardRight}>
                        <button onClick={()=>{approveUser(k['id'])}} className={styles.approve}>Approve</button>
                        <button onClick={()=>{rejectUser(k['id'])}} className={styles.reject}>Reject</button>
                    </div>
                </div>
            ))}

        </>
        
    );

}

export default ApplicationsCard;