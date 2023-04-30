import React, { useRef, useEffect } from 'react';
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import styles from './main_nav.module.scss'

const Main_Nav = () => {

    return(
        <div className={styles.main_nav}>
            <div className={styles.main_outlet}> 
        <Suspense>
        <Outlet className={styles.main_outlet_color}/>
        </Suspense>
        </div>
        </div>
    )
};

export default Main_Nav


