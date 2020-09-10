import React from 'react';
import styles from '../styles/Home.module.css'


const Card3 = (props) => {
    return (
        <div className={styles.card3}>
            <div> 
            <img src={props.image} />
            <div>
                <h2>{props.name}</h2>
                <p><b>Info</b>{props.info}</p>   
            </div>
            </div>
        </div>
    );
};

export default Card3;