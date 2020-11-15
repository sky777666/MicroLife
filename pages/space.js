import React, { useEffect } from 'react';
import styles from '../styles/Home.module.css'
import NasaPhoto from '../components/NasaPhoto'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Iframe from 'react-iframe'
import Head from 'next/head'


const Space = () => {


  useEffect(() => {
    document.body.style.backgroundColor = '#4a5f6b'
    
  })


    return (
      <>
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
<Layout>
  <div>
<NasaPhoto />
</div>
<div style={{
  display:"flex",
  justifyContent:"center",
  flexWrap:"wrap",
  textAlign:"center",

}}>
   
   <div style={{
  padding:"25px",}}>
    <img src="https://cdn.mos.cms.futurecdn.net/iT5HVBwBVhTd5yjkn2EM3d-650-80.jpg.webp "/> 
    </div>
    <div style={{
  padding:"50px",}}>
    <h4>In 1996, researchers led by David McKay, Everett Gibson and Kathie Thomas-Keprta from NASA's Johnson Space Center in Houston suggested that they might have found microbial fossils in a meteorite from Mars. The claim ignited a scientific controversy that lingers to this day. </h4>
</div>

<p> We know that microbial life can service in many harsh environments here on earth. 
    We also know that many of these same life forms can eat a wide variety of substances from metals 
    and sulfur to radiation and chemicals. These types of strong microorganisms we call extremophiles and they are so 
    strong we have even found that they could live on other  planets in our solar system if they ever 
    made their way over there. So the question now is, are there any of these strong extremophiles 
    living on other plants? Well we will probably soon find out. Science is on the search for these 
    extraterrestrial microbes and many scientist think we will find them within the next 10 years or less. 
    There is strong evidence for microbial life on Mars. I will not go into too much detail here but feel free to check out 
    this page to see just some of the interesting finds science has made from the red planet Mars. </p>


<div style={{
  padding:"25px",}}>
<img src="http://cosmology.com/images/GusevCrater1.jpg"  /> 
</div>
<div style={{
  padding:"50px",}}>
<h1>Growth of what may be sulfide-reducing bacteria</h1>
</div>
<div style={{
  padding:"25px",}}>
 <p>Objective of the current NASA rover program was to find and determine the location of Martian organism for later transport back to Earth. 
   An examination of 40 photos taken by the NASA Mars' rovers Curiosity and Opportunity, reveal evidence 
   indicative of moisture and biology on the Red Planet, including the growth and shrinkage of organisms 
   resembling lichens, fungi, mushrooms, and algae. In several photos the rover's metal wheels are 
   caked with clumps of Martian soil which indicates the presence of moisture thereby making adhesion 
   possible, whereas the interior of the wheel wells are caked with ice or fungi. In other photos we can see 
   evidence of white growths on rocks and even black powder growing on shaded parts of the rover. These black growths have been seen throughout the red plants. </p>
  </div>

  <div style={{
  padding:"25px",}}>
      <img src=" http://cosmology.com/images/JosephFigure25Mars.jpg" /> 
    </div>

    <div style={{
  padding:"25px",}}>
      <img src=""/> 
    </div>
    <p>Figure 17: Sol 528 (left) Sol 530. Photos of the same outcrop, just two days apart, demonstrates that the specimens have decreased in size and have all but disappeared (photo credit, NASA.</p>
      <div style={{
  padding:"25px",}}>
<img src="" height="300px" width="350px"/>
  </div>
  <div style={{
  padding:"30px",}}>
   <p>Figure 10. Mars Sol 51 vs Sol 1089--Growth of what appears to be a mass of bacteria and fungi on 
     the Mars Rover Curiosity after 1038 Martian days. An alternate explanation is contamination of mold from earth or dust and dirt 
     accumulated selectively in this area of the rover. Photo NASA/JPL.</p>
     </div>
     <img src="" height="30vh" width="700vw"/>
     <div style={{
  padding:"30px",}}>
  <p>At last six separate specimens have been documented by NASA in Rover photo's. These white growths are unknown. 
    They are not a build up of ice and most closely resembling lichens and 
    fungi. Study of these sites by NASA have shown this white growth
    growing or even shrinking if exposed to direct sunlight over a period of a few weeks of study by the rover. </p>
  </div>
  <section>
  <iframe src='https://mars.nasa.gov/layout/embed/image/insightweather/' width='800' height='530'  scrolling='no' frameborder='0'></iframe>
  </section>
   </div>
   
    </Layout>
    
     </>
    )
};

export default Space;

