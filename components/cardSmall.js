import React from 'react';
import styles from '../styles/Home.module.css'
import { Fade } from "react-awesome-reveal";

const CardSmall = (props) => {
    return (
       
   <div className={styles.cardSmall}>
    {/* //      <Fade direction={"center"} delay={1000} fraction={0}>
    //     <div className={styles.upSplash}>
    //         <img src="https://source.unsplash.com/400x400/?fish,ocean"></img>
    //     </div>
    //</Fade> */}
{/* ------------------------------------------------------------------------- */}
        {/* <Fade direction={"right"} delay={1000} fraction={0}> 
         <div className={styles.upSplash}>
            <img src="https://source.unsplash.com/QK-wGoXoojA/400x400"></img>
        </div> 
        </Fade> */}
{/* ---------------------------------------------------------- */}

        <Fade direction={"left"} delay={1000} fraction={0}> 
        <div> <img src={props.image} height="400px" width="300px"/></div>
        </Fade>
     </div>
    );
};


export default CardSmall;