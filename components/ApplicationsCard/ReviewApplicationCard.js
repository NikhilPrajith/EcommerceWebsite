import React, { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router'
import styles from "./ApplicationsCard.module.css";
import { doc, setDoc, updateDoc,getDoc } from "firebase/firestore"; 
import { db,auth } from "../../firebase-config";
import Rating from '@mui/material/Rating';


const ReviewApplicationsCard = ({apps, approve, reject}) => {
    const router = useRouter();
    const approveUser= async (uid)=>{
        console.log(uid);

        await updateDoc(doc(db, "products", uid), {
            status:'Accepted'
          });
        router.replace(router.asPath);
    };
    const rejectUser= async (uid)=>{
        console.log(uid);

        await updateDoc(doc(db, "products", uid), {
            status:'Rejected'
          });
        router.replace(router.asPath);
    };

   

    return (
        <>
            {apps?.map(k => (
                <div className={styles.card}>
                    <div className={styles.cardLeft}>
                        <div className={styles.name}>{k['data'].productOwner}</div>
                        <Rating name="read-only" value={k['data']['rating']} readOnly />
                        <div style={{fontSize:'12px', color:'rgb(196, 196, 196)', marginBottom:'15px'}} className={styles.email}>{k['data'].description}</div>
                        <div className="">{k['data'].accountType}</div>
                        {k['data'].status =='Accepted' &&(<div style={{color:'green'}}>{k['data'].status}</div>)}
                        {k['data'].status =='Rejected' &&(<div style={{color:'red'}}>{k['data'].status}</div>)}
                        {k['data'].status =='Pending' &&(<div style={{color:'grey'}}>{k['data'].status}</div>)}
                    </div>
                    <div className={styles.cardRight}>
                    </div>
                </div>
            ))}

        </>
        
    );

}

export default ReviewApplicationsCard;