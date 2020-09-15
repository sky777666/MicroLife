import React from 'react';
import Layout from '../components/Layout'
import { Fade,  } from "react-awesome-reveal";
import ReactPlayer from 'react-player/'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

const Fungi = () => {


    return (

       
        <Layout>

        <Head>
        <title>Micro Life | Learn about Microscopic Life</title>
        <link rel="icon" href="/favicon.ico" />
        <script src='https://www.google.com/recaptcha/api.js'></script>
        <meta charset="UTF-8" />
         <meta name="description" content="Microscopic Life, learn about microscopic life on earth and on microbes on Mars." /> 
         <meta name="keywords" content="Germs, germ, teach kids microbiology, protozoa, virus, bacteria, microcosm, microbiology, diatoms, life on mars, mars life, microscopic life," />
         <meta name="author" content="Luke Myers" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>




            <div style={{
            paddingTop:"70px",
            textAlign:"center",
        }}>
            <h1>Fungi</h1>

            <div class="section">
                <Fade direction={"left"} delay={1000} >
                    <div class="container" id="card1">
                        <img src=" https://microbiologysociety.org/uploads/assets/34dd98bb-9dc5-4d8d-b3ee92e737831902/600x450_highestperformance_/C0469877-CandidaalbicansyeastandhyphaeSEMflipped.jpg" alt="" />
                         <div class="caption">
                            <h1>Fungi</h1>
                             <p> Fungi single cell life like Mold or Yeast acquire their food by absorbing dissolved molecules, typically by secreting digestive enzymes into their environment. Growth is their means of mobility, except for spores, which may travel through the air or water. Fungi are the principal decomposers in ecological systems.</p>
                         </div>
                    </div>
                 </Fade>
                <Fade direction={"right"} delay={1000} >
                    <div class="container" id="card3">
                        <img src="https://www.researchgate.net/profile/Vidhura_Mahendra/publication/312553920/figure/fig7/AS:614234115276803@1523456233582/Saccromyces-cerevisiae-unicellular-fungi-Image-credit.png " alt="" />
                        <div class="caption">
                         <h1>Saccromyces cerevisiae (unicellular fungi) </h1>
                        <p>A fungus is any member of the group of eukaryotic organisms that includes unicellular microorganisms such as yeasts and molds, as well as multicellular fungi that produce familiar fruiting forms known as mushrooms.  </p>  
                     </div>
                 </div>
             </Fade>
             <Fade direction={"left"} delay={2000} >
                    <div class="container" id="card3">
                        <img src="https://www.westernsydney.edu.au/__data/assets/image/0009/725985/arbuscular-mycorhizae.jpg " alt="" />
                        <div class="caption">
                         <h1>We Help Plants (The Internet of Mother Earth)</h1>
                        <p>A mycorrhiza is a mutual symbiotic association between a fungus and a plant.The term mycorrhiza refers to the role of the fungus in the plant's rhizosphere, its root system. Mycorrhizae play important roles in plant nutrition, soil biology and soil chemistry.</p>  
                     </div>
                 </div>
             </Fade>

             
             <Fade direction={"right"} delay={2000} >
                    <div class="container" id="card3">
                        <img src=" https://lh5.googleusercontent.com/-ivujy69nIlo/TXSY_jXmAHI/AAAAAAAAACc/5hTFBZCoRPc/s1600/pg-20-fungi-alamy_91555t.jpg" alt="" />
                        <div class="caption">
                         <h1>Mold Reproduction</h1>
                        <p>Molds reproduce by producing large numbers of small spores, which may contain a single nucleus or be multinucleate. Mold reproduce by means of tiny spores. The spores are like seeds, but invisible to the naked eye, that float through the air and deposit on surfaces. When the temperature, moisture, and available nutrient conditions are correct, the spores can form into new mold colonies where they are deposited.</p>  
                     </div>
                 </div>
             </Fade>
            
                </div>
                    <div className={styles.movie2}>
                        <h1 style={{padding:"40px"}}>Mycorrhizal Fungi</h1>
                        <div className={styles.playerwrapper}>
                        <ReactPlayer className={styles.reactplayer}
                            url='https://www.youtube.com/watch?v=0oyqPZJj-2w'width='50vw' height='80vh' />
                         </div> 
                         </div>
                     </div>
           
       </Layout>
    );
};

export default Fungi;