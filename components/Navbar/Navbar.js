import React, { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router'
import styles from "./Navbar.module.css";
import {CgShoppingBag} from 'react-icons/cg'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, query, where, getDoc, doc } from "firebase/firestore";
import { auth,db } from "../../firebase-config";
import useAuth from "../../context/Authentication/AuthProvider";
import Link from "next/link";

const Navbar = ({userName}) => {
    const router = useRouter();

    const [profilePics,setProfilePics] = useState(["https://images.pexels.com/photos/4046718/pexels-photo-4046718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
"https://images.pexels.com/photos/7260250/pexels-photo-7260250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
,"https://images.pexels.com/photos/921294/pexels-photo-921294.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"])

    const [randomNum,setRandomNum] = useState(null);
    const {user,data} = useAuth();

    useEffect(()=>{
        setRandomNum(Math.floor(Math.random() * (profilePics.length-1 + 1)));

       
    })



    return (
        <div>
           <div className={styles.navbar}>
                <div>
                    <Link href="/"><div className={styles.name}>HypeCart</div></Link>
                </div>
                <div className={styles.navRight}>
                    <div className={styles.options}>
                        <div style={{display:'flex'}}>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div>{""}</div>
                        </div>
                    </div>
                    
                    <div className={styles.profile}>

                        <div className={styles.profilePic}><img src={profilePics[randomNum]}/></div>
                        <div className={styles.signedInUser}>{user ? user.displayName : "Guest"}</div>

                        {!data.accountType && (<div onClick={()=>{router.push("/login")}}  className={styles.loginButton}>Login</div>)}
                        {data.accountType && data.accountType !='Guest' && (<div onClick={()=>{router.push(`/dashboard?user=${user.uid}`)}}  className={styles.profileButton}>Profile</div>)}

                    </div>
                </div>
            </div>
        </div>
    );

}

export default Navbar;
