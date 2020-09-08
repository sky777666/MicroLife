import React, { useEffect } from 'react';
import styles from '../styles/Home.module.css'
import NasaPhoto from '../components/NasaPhoto'
import Layout from '../components/Layout'



const Space = () => {


  useEffect(() => {
    document.body.style.backgroundColor = '#4a5f6b'
    
  })


    return (
<Layout>
<div>
<NasaPhoto />
</div>
<div>
    <div> <img src=" " /> </div>
    <div> <img src="https://cdn.mos.cms.futurecdn.net/iT5HVBwBVhTd5yjkn2EM3d-650-80.jpg.webp " /> <h4>In 1996, researchers led by David McKay, Everett Gibson and Kathie Thomas-Keprta from NASA's Johnson Space Center in Houston suggested that they might have found microbial fossils in a meteorite from Mars. The claim ignited a scientific controversy that lingers to this day. </h4></div>
 
<div><img src="http://cosmology.com/images/GusevCrater1.jpg" /> <h1>Growth of what may be sulfide-reducing bacteria</h1></div>
 
 <h4>objective of the current NASA rover program was to find and determine the location of Martian organism for later transport back to Earth. An examination of 40 photos taken by the NASA Mars' rovers Curiosity and Opportunity, reveal evidence indicative of moisture and biology on the Red Planet, including the growth and shrinkage of organisms resembling lichens, fungi, mushrooms, and algae. In several photos the rover's metal wheels are caked with clumps of Martian soil which indicates the presence of moisture thereby making adhesion possible, whereas the interior of the wheel wells are caked with ice or fungi. </h4>
  </div>

    <div> <img src=" http://cosmology.com/images/JosephFigure25Mars.jpg" /> </div>
    <div> <img src="http://cosmology.com/images/Sol528530.jpg " /> 
    <h4>Figure 17: Sol 528 (left) Sol 530. Photos of the same outcrop, just two days apart, demonstrates that the specimens have decreased in size and have all but disappeared (photo credit, NASA.</h4>
  </div>
   
    </Layout>
    )
};

export default Space;

