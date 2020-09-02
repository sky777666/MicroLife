import React from 'react';
import styles from '../styles/Home.module.css'


const CardSmall = () => {
    return (
        
    <div className={styles.cardSmall}>
        <div className={styles.upSplash}>
            <img src="https://source.unsplash.com/400x400/?fish,ocean"></img>
        </div>
        <div className={styles.upSplash}>
        {/* <div style={{
            borderRadius: '25%',
            
        }}> */}
            <img src="https://source.unsplash.com/QK-wGoXoojA/400x400"></img>
        </div>
        
    </div>
    );
};

export default CardSmall;