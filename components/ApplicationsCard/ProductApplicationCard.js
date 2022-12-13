import React, { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router'
import styles from "./ApplicationsCard.module.css";
import { doc, setDoc, updateDoc } from "firebase/firestore"; 
import { db } from "../../firebase-config";


const ProductApplicationsCard = ({apps, approve, reject}) => {
    const router = useRouter();

    const [message,setMessage] = useState("Your OU application was approved!");
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
                        <div className={styles.name}>{k['data'].name}</div>
                        <div style={{fontSize:'12px', color:'rgb(196, 196, 196)', marginBottom:'15px'}} className={styles.email}>{k['data'].description}</div>
                        <div className="">{k['data'].accountType}</div>
                        {k['data'].status =='Accepted' &&(<div style={{color:'green'}}>{k['data'].status}</div>)}
                        {k['data'].status =='Rejected' &&(<div style={{color:'red'}}>{k['data'].status}</div>)}
                        {k['data'].status =='Pending' &&(<div style={{color:'grey'}}>{k['data'].status}</div>)}
                    </div>
                    <div className={styles.cardRight}>
                        <button onClick={()=>{approveUser(k['id'])}} className={styles.approve} style={{color:'green',marginRight:'10px'}}>Approve</button>
                        <button onClick={()=>{rejectUser(k['id'])}} className={styles.reject}  style={{color:'red',marginRight:'10px'}}>Reject</button>
                    </div>
                    <input onChange={(evt)=>setMessage(evt.target.value)} placeholder="Input message" style={{color:'black'}}></input>
                </div>
            ))}

        </>
        
    );

}

export default ProductApplicationsCard;