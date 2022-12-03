import React, { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router'
import styles from "./Banner.module.css";
import {CgSearch} from 'react-icons/cg'


const Banner = ({filterFunc}) => {
    return (
        <>
           <div className={styles.bannerTop}>
                <div>
                    <div className={styles.search}><CgSearch></CgSearch>
                        <input onChange={filterFunc} className="inputBox" type="text" placeholder="Search for products..."></input>
                        {/*<div className={styles.dropdown}>
                            <div className={styles.dropbtn}>Category </div>
                            <div className={styles.dropdownContent}>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
    </div>*/}
                    </div>
                </div>
            </div>
            

        </>
        
    );

}

export default Banner;