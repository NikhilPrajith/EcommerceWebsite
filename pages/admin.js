import { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar'
import useAuth from '../context/Authentication/AuthProvider'
import { auth,db } from '../firebase-config';
import { collection, query, where, getDocs } from "firebase/firestore";
import { useState } from 'react';
import ApplicationsCard from '../components/ApplicationsCard/ApplicationsCard';

export default function admin({applications}) {
    const [allApplications,setAllApplications] = useState(null);

    const{logout,user} = useAuth();
    useEffect(()=>{
        getData1();
    },[user])
    const getData1 = async ()=>{
        const q = query(collection(db, "users"), where("accountType", "!=", "Super User"));
        const querySnapshot = await getDocs(q);
        const data = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            const temp = {id:doc.id, data:doc.data()};
            data.push(temp);
            console.log("--",doc.id)
        });
        setAllApplications(data);
        console.log(allApplications)
    }

    


    return (
        <div>
            <Navbar></Navbar>
            <button onClick={logout}>Logout</button>
            <ApplicationsCard apps={applications}></ApplicationsCard>



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

export async function getServerSideProps(context) {
    const getData1 = async ()=>{
        const q = query(collection(db, "users"), where("accountType", "!=", "Super User"));
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
            applications: data
        }, // will be passed to the page component as props
    }
  }
