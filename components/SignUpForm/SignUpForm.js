import React, { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router'
import styles from "./SignUpForm.module.css";
import {CgShoppingBag} from 'react-icons/cg'
import { getAuth, createUserWithEmailAndPassword,updateProfile, signOut } from "firebase/auth";
import { collection,addDoc,setDoc,doc } from "@firebase/firestore";
import { auth,db } from "../../firebase-config";
import Link from "next/link";


const SignUpForm = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [name,setName] =useState(null)
    const [userType,setUserType] = useState("Ordinary User");
    const [error, setError] = useState(" ");
    const router = useRouter();

   
    const submitHandler = async () =>{
        /*const adding = await setDoc(doc(db, "users",122), 
            userDetails
        );*/
        
        if(confirmPassword != password){
            setError("Error: (Passwords do not match)");
        }else if(password.length <6){
            setError("Error: (Weak password)");
        }else{
            signOut(auth);
            try{
                const userData = await createUserWithEmailAndPassword(auth, email,password);
                await updateProfile(auth.currentUser,{displayName:`${name}`});
                const userDetails = {
                    email: userData.user.email,
                    userId: userData.user.uid,
                    name: userData.user.displayName,
                    accountType:userType,
                    status: "Inavlid"

                };
                console.log(db);
                const adding = await setDoc(doc(db, "users", userData.user.uid), 
                    userDetails
                ); 
                router.push("/");
            }catch(error){
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            }
        }
    }

    
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.greeting}>Get started</div>
                <div className={styles.subGreeting}>Provide the details below to create your ordinary user account</div>
                <div className={styles.error}>{error}</div>
                <div className={styles.inputLabel}>Name</div>
                <input
                    className={styles.inputField}
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                />
                <div className={styles.inputLabel}>Email</div>
                <input
                    className={styles.inputField}
                    type="text"
                    placeholder="Enter your email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                {/*<div className={styles.inputLabel}>Account type</div>
                <select onChange={(e) => setUserType(e.target.value)} className={styles.inputField}>
                    <option value="Ordinary User">Ordinary User</option>
                    <option value="Super User">Super User</option>
                </select>*/}
                <div className={styles.inputLabel}>Password</div>
                <input
                    className={styles.inputField}
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className={styles.inputLabel}>Confirm Password</div>
                <input
                    className={styles.inputField}
                    type="password"
                    placeholder="Enter password again"
                    value={confirmPassword}
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <button className={styles.submitButton} onClick={submitHandler}>Apply</button>
                <div className={styles.signUpText}>
                    <div>
                        Already have an account?
                    </div>
                    <Link href="/login"><a>Login</a></Link>
                </div>
                
            </div>
        </div>
    );

}

export default SignUpForm;