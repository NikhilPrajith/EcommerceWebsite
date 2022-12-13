import { useEffect} from 'react';
import Navbar from '../components/Navbar/Navbar'
import useAuth from '../context/Authentication/AuthProvider'
import { auth,db } from '../firebase-config';
import { collection, query, where, getDocs } from "firebase/firestore";
import { useState } from 'react';
import ApplicationsCard from '../components/ApplicationsCard/ApplicationsCard';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';

import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ProductApplicationsCard from '../components/ApplicationsCard/ProductApplicationCard';
import ReviewApplicationsCard from '../components/ApplicationsCard/ReviewApplicationCard';


export default function admin({applications,productApps,reviews}) {
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

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div>
            <Navbar></Navbar>

            <Box style={{marginLeft:'40px',marginRight:'40px',marginTop:'50px'}}  sx={{ width: '95%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ widthborderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="User Applications" value="1" />
                    <Tab label="Product Applications" value="2" />
                    <Tab label="Reports" value="3" />
                </TabList>
                </Box>
                <TabPanel value="1">
                    <ApplicationsCard apps={applications}></ApplicationsCard>
                </TabPanel>
                <TabPanel value="2">
                    <ProductApplicationsCard apps={productApps}></ProductApplicationsCard>
                </TabPanel>
                
                    
                <TabPanel value="3">
                    <ReviewApplicationsCard apps={reviews}></ReviewApplicationsCard>
                </TabPanel>
            </TabContext>
        </Box>
            

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
    const getData2 = async ()=>{
        const q = query(collection(db, "products"));
        const querySnapshot = await getDocs(q);
        const data = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            const temp = {id:doc.id, data:doc.data()};
            data.push(temp);
        });
        return data
        
    }
    const getData3 = async ()=>{
        const q = query(collection(db, "reports"), where("category", "==", "Product Owner"));
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
    const data2 = await getData2();
    const data3 = await getData3();

    return {
      props: {
            applications: data,
            productApps: data2,
            reviews: data3
        }, // will be passed to the page component as props
    }
  }
