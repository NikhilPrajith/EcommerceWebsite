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




export default function CollapseCard({product}) {
    const [open, setOpen] = React.useState(false);

    const [open2, setOpen2] = React.useState(false);
    const handleClick = (index) => {
        setOpen(!open);
    };

    const handleClick2 = (index) => {
        setOpen2(!open2);
    };

    const statuss = "Rejected";
    return(
        <>
        <ListItemButton onClick={handleClick}>
            <ListItemIcon>
                <div style={{border:'0.5px grey solid', borderRadius:'8px', marginRight:'30px'}}>
                    <img
                        style={{height:'100px', width:'100px',borderRadius:'8px'}}
                        src={product.data.pictures[0]}
                    />
                </div>
            </ListItemIcon>
            <ListItemText primary={product.data.name} />
            {product.data.status == "Accepted" && (<div style={{marginRight:'12px',backgroundColor:'rgb(222, 254, 222)',padding:'10px',borderRadius:'5px'}}>Approved</div>)}
            {product.data.status == "Rejected" && (<div style={{marginRight:'12px',backgroundColor:'rgb(255, 223, 223)',padding:'10px',borderRadius:'5px'}}>Rejected</div>)}
            {product.data.status == "Pending" && (<div style={{marginRight:'12px',backgroundColor:'rgb(233, 233, 233)',padding:'10px',borderRadius:'5px'}}>Approved</div>)}
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        {/* can you make this a switch/if statement/ or array so that it prints depending on the item if its rejected/penind/approved */}

        {/* for rejected
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="reason for rejection" />
                </ListItemButton>
            </List>
        </Collapse>
            </> */}
        {/* for pending
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Pending" />
                </ListItemButton>
            </List>
        </Collapse>
            </> */}
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Highest Bid" />
                </ListItemButton>
                <ListItemButton onClick={handleClick2}>
                <ListItemText className={styles.bid} primary="Bidders" />
                {open2 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                {/* can you place a popup message asking seller to confirm when they accept a certain bidder and button needs a bit of adjusting */}
                <Collapse in={open2} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="bidders highest to lowest" />
                        <ListItemButton style={{width:'20px', borderRadius:'8px', padding:'10px', backgroundColor:'green', color:'white', marginLeft:'700px'}}>Accept</ListItemButton>
                    </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </Collapse>
        </> 
    )
}