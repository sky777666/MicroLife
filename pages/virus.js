import React from 'react';
import Layout from '../components/Layout';
import { Fade, Slide } from "react-awesome-reveal";


const Virus = () => {
    return (
        
    
        <Layout>
            <div class="section">
                <Fade direction={"left"} delay={1000} >
                    <div class="container" id="card1">
                        <img src="https://www.thoughtco.com/thmb/-V5v69KMk-rN1ADWAR19Cklszt0=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/tongue_bacteria-57b636455f9b58cdfde3ff5a.jpg" alt="" />
                         <div class="caption">
                            <h1>Bacteria</h1>
                             <p>Bacteria are a type of biological cell. They constitute a large domain of prokaryotic microorganisms. Typically a few micrometres in length, bacteria have a number of shapes, ranging from spheres to rods and spirals. Bacteria were among the first life forms to appear on Earth, and are present in most of its habitats. </p>
                         </div>
                    </div>
                 </Fade>
                <Fade direction={"right"} delay={1000} >
                    <div class="container" id="card3">
                        <img src="https://cdn.the-scientist.com/assets/articleNo/64520/aImg/27632/crispr-phage-thumb-s.jpg" alt="" />
                        <div class="caption">
                         <h1>Virus</h1>
                        <p>A virus is a submicroscopic infectious agent that replicates only inside the living cells of an organism.
                            Viruses infect all types of life forms, from animals and plants to microorganisms, including bacteria and archaea.
                            Since Dmitri Ivanovsky's 1892 article describing a non-bacterial pathogen infecting tobacco plants, and the discovery of the tobacco mosaic virus by Martinus Beijerinck in 1898,
                             more than 6,000 virus species have been described in detail,[4] of the millions of types of viruses in the environment. </p>  
                     </div>
                 </div>
             </Fade>
            {/* <Slide direction={"left"} delay={1000} > */}
            <div class="container2" id="card2">
                <div class="text">
                    <h1>MicroCosm</h1>
                    <h4>Fullstack Server Side Rendering with Next.js the most most advanced React framework. </h4>
                     <h4>This application was created tThis application was created to inspire a new generation of Microbiologist 
                         and get kids involved in the wonders of the Microscopic world around them. 
                        Some of the technologies it includes are HTML, CSS, React, Next.js, JavaScript, 
                        React Animations, SQLite DB, and Prisma. </h4>
                         <button>Play Here</button>
                
                 </div>
            </div>
             {/* </Slide> */}
     </div>
     </Layout>
        
        
           
    );
};

export default Virus;