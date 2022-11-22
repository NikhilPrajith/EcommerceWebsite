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


export default function CollapseCard({product}) {
    const [open, setOpen] = React.useState(false);

    const handleClick = (index) => {
        setOpen(!open);
    };
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
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Starred" />
                </ListItemButton>
            </List>
        </Collapse>
            </>
    )
}