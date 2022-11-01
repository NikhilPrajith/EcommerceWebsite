import Head from 'next/head'

import LoginForm from '../components/LoginForm/LoginForm'
import styles from "../styles/dashboard.module.css"
import { auth,db } from '../firebase-config' 
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useAuth from '../context/Authentication/AuthProvider'
import Link from 'next/link'

export default function Dashboard() {
  const router = useRouter();
  const {logout} = useAuth();
  //clearly not the way to do protected routing but it's simple to do this way, so why not? We, can change it later
  const {user,data} = useAuth();
  useEffect(()=>{
    if(data.accountType == "Super User"){
      router.push("/admin")
    }else{
      console.log(data)
    }
  },[data])




  return (
    <div>
        {data["status"]=="invalid" && <div>Your application for a OU account is under review. Please be patient!</div>}
        {data["status"] =="active" && 
          <div>
            <div>You now have the access to submit product applications</div>
            <div><Link href="/productApplications">List Product</Link></div>
          </div>
          
        }


        <button onClick={logout}>Logout</button>
        <style jsx global>{`
            html, body {
            padding: 0;
            margin: 0;
            }
            * {
            box-sizing: border-box;
            }
        `}</style>
    </div>
  )
}
