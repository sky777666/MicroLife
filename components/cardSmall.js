import React from 'react';
import styles from '../styles/Home.module.css'
import { Fade } from "react-awesome-reveal";

const CardSmall = () => {
    return (
       
    <div className={styles.cardSmall}>
         <Fade direction={""} delay={1000} fraction={1}>
        <div className={styles.upSplash}>
            <img src="https://source.unsplash.com/400x400/?fish,ocean"></img>
        </div>
        </Fade>
        <Fade direction={"right"} delay={1000} fraction={0}> 
         <div className={styles.upSplash}>
         {/* <div style={{
            borderRadius: '25%',
            
        }}>  */}
            <img src="https://source.unsplash.com/QK-wGoXoojA/400x400"></img>
        </div> 
        </Fade>
    </div>
    );
};

export default CardSmall;