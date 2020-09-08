import React from 'react';

const Virus = () => {
    return (
        <Layout>
        <div>
            <div class="section">
                <Fade direction={"left"} delay={1000} >
                    <div class="container" id="card1">
                        <img src="https://cdn.pixabay.com/photo/2016/01/08/11/57/butterfly-1127666_1280.jpg" alt="" />
                         <div class="caption">
                            <h1>MicroCosm</h1>
                             <p>Fullstack Server Side Rendering with Next.js the most most advanced React framework. </p>
                         </div>
                    </div>
                 </Fade>
<Fade direction={"right"} delay={1000} >
<div class="container" id="card3">
        <img src="https://i.pinimg.com/564x/32/a5/a0/32a5a0bcfc8291232e9d9a1d6d179234.jpg" alt="" />
        <div class="caption">
            <h1>MicroCosm</h1>
            <p>Fullstack Server Side Rendering with Next.js the most most advanced React framework. </p>  
        </div>
    </div>
 </Fade>

    
    <Slide direction={"left"} delay={1000} >
<div class="container2" id="card2">
        <div class="text">
            <h1>MicroCosm</h1>
            <h4>Fullstack Server Side Rendering with Next.js the most most advanced React framework. </h4>
            <h4>This application was created tThis application was created to inspire a new generation of Microbiologist 
                and get kids involved in the wonders of the Microscopic world around them. 
                Some of the technologies it includes are HTML, CSS, React, Next.js, JavaScript, 
                React Animations, SQLite DB, and Prisma. </h4>
                <button>Play Here</button>
                {/* <button style={{
                width: '100px',
                height: '50px',
                backgroundColor: 'green',
                borderRadius: '10%',
                padding: '10px',
            }}>Play Here</button> */}
        </div>
    </div>
    </Slide>
        </div>
    );
};

export default Virus;