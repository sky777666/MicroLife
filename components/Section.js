import React from 'react';
import Card3 from '../components/Card3'
const Section = (props) => {
    return (
        <section style={{
            width:"100%",
            height:"900vh",
            backgroundColor: "gray",
            textAlign: "center",
            zIndex:"-1", }}>
                    <div style={{
                         padding:"50px",
                         display:"flex",
                         alignContent:"center",
                         justifyContent:"center",
                         }}>
                            < Card3 />
                    </div>
                    <h1>{props.name}</h1>

        </section>
    );
};

export default Section;