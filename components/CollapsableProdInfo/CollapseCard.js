import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import styles from './collapsableCard.module.css';
import { useEffect } from 'react';

import Button from '@mui/material/Button';
import OverlayCenter from '../Simpleoverlay/OverlayCenter';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../../firebase-config';
import ShoppingCart from '../ShoppingCart/ShoppingCart';


export default function CollapseCard({product}) {
    const [open, setOpen] = React.useState(false);

    const [open2, setOpen2] = React.useState(false);
    const[openOverlay,setOpenOverlay] = React.useState(false);

    const [selectedBid,setSelectedBid] = React.useState(null);




    const handleClick = (index) => {
        setOpen(!open);
    };

    const handleClick2 = (index) => {
        setOpen2(!open2);
    };
    useEffect(() => {
      console.log("jhnhn",product.data.Bids);
    }, [])
    
    const acceptBid = ()=>{
        console.log("Bid Accepted",selectedBid);
        console.log(product)
        let bidAccepted = {}
        if ("AcceptedBids" in product.data){
            bidAccepted = product.data["AcceptedBids"]
        }
        bidAccepted[selectedBid] = "Need Payment"

        const ref = doc(db, 'products', product.id);
        setDoc(ref, { bidAccepted: bidAccepted }, { merge: true });
    }

    const statuss = "Rejected";
    return(
        <>
        <OverlayCenter open={openOverlay} setOpen={setOpenOverlay} acceptBidFunc={acceptBid}></OverlayCenter>
        <ListItemButton style={{}} onClick={handleClick}>
            <ListItemIcon>
                <div style={{borderRadius:'8px', marginRight:'30px'}}>
                    <img
                        style={{height:'100px', width:'100px',borderRadius:'8px'}}
                        src={product.data.pictures[0]}
                    />
                </div>
            </ListItemIcon>
            <ListItemText primary={product.data.name} />
            {product.data.status == "Accepted" && (<div style={{marginRight:'12px',backgroundColor:'rgb(222, 254, 222)',padding:'10px',borderRadius:'5px'}}>Approved</div>)}
            {product.data.status == "Rejected" && (<div style={{marginRight:'12px',backgroundColor:'rgb(255, 223, 223)',padding:'10px',borderRadius:'5px'}}>Rejected</div>)}
            {product.data.status == "Pending" && (<div style={{marginRight:'12px',backgroundColor:'rgb(233, 233, 233)',padding:'10px',borderRadius:'5px'}}>Pending</div>)}
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse style={{marginBottom:'30px'}} in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {product.data.status =="Rejected" &&(
                    <>
                    <div>Message from SU:</div>
                    <div>{product.data.message}</div>
                    </>
                ) }

                {product.data.status != "Rejected" &&(<ListItemButton onClick={handleClick2}>
                <ListItemText className={styles.bid} primary="Bids" />
                {open2 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>)}
                {/* can you place a popup message asking seller to confirm when they accept a certain bidder and button needs a bit of adjusting */}
                {product.data.Bids != null &&(<Collapse in={open2} style={{marginLeft:'51px'}} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        {product.data.Bids != null && (<div style={{width:'100%',display:'flex', flexDirection:'column',alignItems:'center'}}>{Object.keys(product.data.Bids).map((key, index) => {
                            return (
                            <div style={{width:'100%',display:'flex',alignItems:'center', justifyContent:'space-between',marginBottom:'10px'}}>
                                <div style={{width:'70%',display:'flex',justifyContent:'space-between'}}>
                                    <div>User: <span style={{color:'grey'}}>{`${key}`.slice(0,5)}...</span></div>
                                    <div><div><span style={{color:'grey'}}>${product.data.Bids[key]}</span></div></div>
                                
                                </div>
                                {(!("bidAccepted" in product.data) || !(`${key}` in product.data['bidAccepted'])) &&(
                                <Button onClick={()=>{setSelectedBid(key),setOpenOverlay(true)}} variant="outlined">Accept bid</Button>)}
                                {("bidAccepted" in product.data && (`${key}` in product.data['bidAccepted'])) &&(<div style={{color:'grey'}}>{product.data['bidAccepted'][`${key}`]}</div>)}

                            </div>
                            );
                        })}</div>)}
                    </div>
                    </List>
                </Collapse>)}
                {product.data.Bids == null &&(<Collapse in={open2} timeout="auto" unmountOnExit>
                <div style={{padding: '10px', marginBottom:'20px', backgroundColor: 'white',color: 'rgb(116, 116, 116)',textAlign: 'center',borderRadius: '8px'}}>
                        No active bids
                </div>

                </Collapse> )}
            </List>
        </Collapse>
        </> 
    )
}