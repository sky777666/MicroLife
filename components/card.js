import React from 'react';
import styles from '../styles/Home.module.css'



const Card = () => {
    return (
        <div className={styles.cardArea}>
        <div className={styles.upSplash}>
            <img src="https://source.unsplash.com/400x400/?fish,ocean"></img>
        </div>
        <div className={styles.upSplash}>
            <img src="https://source.unsplash.com/QK-wGoXoojA/400x400"></img>
        </div>

        <div className={styles.upSplash}>
            <img src="https://source.unsplash.com/_T1jj2L60_c/400x400"></img>
        </div>

        <div className={styles.upSplash}>
            <img src="https://source.unsplash.com/SGXIUN4k7_4/400x400"></img>
        </div>




        </div>
    );
};

export default Card;