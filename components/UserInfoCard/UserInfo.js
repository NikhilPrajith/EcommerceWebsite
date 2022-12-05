import React, { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router'
import styles from "./userInfo.module.css";
import {CgShoppingBag} from 'react-icons/cg'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, query, where, getDoc, doc } from "firebase/firestore";
import { auth,db } from "../../firebase-config";
import useAuth from "../../context/Authentication/AuthProvider";
import Link from "next/link";
import {IconButton, Avatar,Box, Modal,TextField,Button,Grid,Paper, Typography} from '@mui/material';
import AddCardIcon from '@mui/icons-material/AddCard';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const UserInfo = ({userName}) => {
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
        return (
          <Paper
            sx={{
              p: 2,
              margin: 'auto',
              maxWidth: 500,
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <Avatar sx={{ width: 128, height: 128 }} variant="square" src ="https://img.freepik.com/free-vector/retro-black-moth-clipart-illustration_74855-10838.jpg?w=1800&t=st=1670191606~exp=1670192206~hmac=030a8ca3b15e180e59827f25e526ab7494b33ff81cb620c5ed54399f9fa9a547" ></Avatar>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                   <Button onClick={handleOpen}>Namgyal Thily</Button>
                   <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title"aria-describedby="modal-modal-description">
                    <Box sx={style}>
                     <Typography id="modaltitle" variant="h6" component="h2">
                       Account Details
                     </Typography>
                     <Typography id="modaldescription" sx={{ mt: 2 }}>
                       Email : Jwerk45@gmail
                       <br/>
                       Phone Number: 911-311-411
                       <br/>
                       Address: 42-10 J street NY, 11217
                     </Typography>
                    </Box>
                  </Modal>
                    <Typography variant="body2" gutterBottom>
                      SuperUser
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      User ID: 1030114
                    </Typography>
                  </Grid>
                  <Grid item>
                   <TextField id="money" label="Amount" variant="filled" color = 'success' size = 'small'/>
                   <IconButton> <AddCardIcon/> </IconButton>
                  </Grid>
                </Grid>
                <Grid item>
                  <IconButton> <LocalAtmIcon color = 'success'/> </IconButton>
                  <Typography variant="filled" component="div">
                    $19.00
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
    );
      
}

export default UserInfo;
