import React, { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router'
import styles from "./Footer.module.css";
import {CgSearch} from 'react-icons/cg'


const Footer = ({}) => {
    return (
        <>
           <div className={styles.footer}>
                <div>HyperCart</div>
            </div>
            

        </>
        
    );

}

export default Footer;