import React, { useRef, useEffect } from 'react';

import LOGO from '../../../img/other/LOGO.png'
import styles from './head.module.scss'


const Head = () => {
  return (
    <section className={styles.main}>
      <div className={styles.main_services}>
        <img className={styles.main_logo_img} src={LOGO} />
      </div>
    </section>
  );
};

export default Head;