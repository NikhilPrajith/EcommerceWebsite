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
import { useRouter } from 'next/router';
import useAuth from '../../context/Authentication/AuthProvider';
import ShoppingCart from '../ShoppingCart/ShoppingCart';



export default function CollapseCard2({product}) {
    const router = useRouter();
    const {user,data} = useAuth()

    const [open, setOpen] = React.useState(false);

    const [open2, setOpen2] = React.useState(false);
    const [checkoutOpen, setChecoutOpen] = React.useState(false);

    const handleClick = (index) => {
        setOpen(!open);
    };

    const handleClick2 = (index) => {
        setOpen2(!open2);
    };
    useEffect(() => {
      console.log("jhnhn",product.data);
    }, [])
    

    const statuss = "Rejected";
    return(
        <>
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

            <div style={{display:'flex',marginRight:'15px', textAlign:'end',}}>{("bidAccepted" in product.data && (data) && (`${data.userId}` in product.data['bidAccepted'])) &&(<div style={{}}>
                <div>Bid Accepted</div>
                {product.data['bidAccepted'][`${data.userId}`] == "Need Payment" && (<div style={{color:'grey'}}>Complete Payment</div>)}

            </div>)}</div> 
            {product.data.price >product.bidPrice && (<div style={{marginRight:'12px',backgroundColor:'rgb(255, 223, 223)',padding:'10px',borderRadius:'5px'}}>Low Bid</div>)}
            {product.data.price == product.bidPrice && (<div style={{marginRight:'12px',backgroundColor:'rgb(233, 233, 233)',padding:'10px',borderRadius:'5px'}}>Highest Bidder</div>)}
            
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <div style={{display:'flex', justifyContent:'flex-end'}}>
                <div style={{width:"80%"}}>
                    <div>Current Price: {product.data.price}</div>
                    <div>Your bid price: {product.bidPrice}</div>
                </div>
                <div style={{width:'20%',display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'end'}}>
                    {("bidAccepted" in product.data && (data) && (`${data.userId}` in product.data['bidAccepted']) && (product.data['bidAccepted'][`${data.userId}`] == "Need Payment")) && <Button onClick={()=>{setChecoutOpen(true)}} variant="contained">Complete Payment</Button> } 
                    <Button onClick={()=>{router.push(`/productDetails?id=${product.prodId}`)}}  variant="outlined">Update Bid</Button>
                </div>
            </div>
        </Collapse>
        </> 
    )
}