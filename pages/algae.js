import React, {useState, useEffect} from 'react';
import ReactPlayer from 'react-player/'
import Card from '../components/Card'
import Footer from '../components/Footer';
import Layout from '../components/Layout'
import MyCarousel from '../components/MyCarousel'
import styles from '../styles/Home.module.css'


const Algae = () => {


    const [ news, setNews] = useState([])

    //fetch news
    
    const fetchNews = () => {
        fetch("http://hn.algolia.com/api/v1/search?query=diatoms")
        // fetch("http://hn.algolia.com/api/v1/search?query=foo&tags=story")
        .then(result => result.json())
         .then(data => setNews(data.hits))
        //  .then(data => console.log(data));
        // .catch(error => console.log(error));
    };
    useEffect(() => {
        fetchNews()
    })
    




    return (
        <Layout>
        <div>
            <section style={{width: "100%", height:"100vh",display:"flex",justifyContent:"center",backgroundColor: "blue",}}>
                <div style={{ height:"100vh",width: "100%", }}>
                    <div style ={{ display: "flex", alignContent: "center",position: "relative",left: '5%',width: "100%", padding:"70px",}}>
                     <ReactPlayer url="https://www.youtube.com/watch?v=eVZlVB0SD-8&t=2s" controls={true} loop ={true} muted={false} autoplay={false} background={true} playing={false} width='80vw' height='550px'  />
                    </div>
                </div>
            </section>
             <section style={{width: "100%", height:"80vh",display:"flex",justifyContent:"center",backgroundColor: "gray", }}>
                <div> <Card/> 
                <h1 style={{ padding:"45px", textAlign:"center"}}>Microscopes allow us to see into the microscopic world </h1>
                </div>
             </section>
            <section style={{ width: "100%",height:"90vh",display:"flex",justifyContent:"center", backgroundColor: "green",}}>
                <div style={{ display:"flex", height:"220vh",width:"110vh", alignContent:"center",  objectFit:"cover",overflow:"hidden", padding:"10px", }}>
                <MyCarousel />
                </div>   
            </section>
            <section style={{width: "100%", height:"100vh",display:"flex", justifyContent:"center", backgroundColor: "lightblue", }}>
            <section className={styles.section1}>
         <div className={styles.flipcard}>
            <div className={styles.flipcardinner}>
             <div className={styles.flipcardfront}>
                 <img width="350px" height="350px" src="https://i.pinimg.com/564x/59/58/ed/5958edb550c3d09c2880ccbba28b617f.jpg" alt="Avatar" />
                     </div>
                          <div className={styles.flipcardback}>
                             <img width="350px" height="350px" src="https://i.pinimg.com/564x/21/4c/30/214c30d4d8788d0a67831c8abe94a41a.jpg" alt="Avatar" />
                             {/* <StarRating /> */}
                         </div>
                    </div>
                </div>
                <div className={styles.flipcard}>
            <div className={styles.flipcardinner}>
             <div className={styles.flipcardfront}>
                         <img width="350px" height="350px" src="https://i.pinimg.com/564x/84/e8/09/84e80994ac7c5964f2c58e5fcf8a0974.jpg " alt="Avatar" />
                            </div>
                                 <div className={styles.flipcardback}>
                                <img width="350px" height="350px" src=" https://i.pinimg.com/564x/24/a8/68/24a868f6ef98dbcb570016f8364ec076.jpg" alt="Avatar" />
                                {/* <StarRating /> */}
                                </div>
                            </div>
                        </div>
                        <div className={styles.flipcard}>
            <div className={styles.flipcardinner}>
             <div className={styles.flipcardfront}>
    <img width="350px" height="350px" src=" https://i.pinimg.com/564x/4c/99/46/4c9946dce3e83c88b301422b7dc92248.jpg" alt="Avatar" />
        </div>
            <div className={styles.flipcardback}>
                <img width="350px" height="350px" src=" https://i.pinimg.com/564x/be/17/38/be1738fd702d1c573ca9aae3ae008158.jpg" alt="Avatar" />
            </div>
            <div> 
                
            </div>
        </div>
    </div>
    <h1 style={{ padding:"45px", textAlign:"center"}}> These are examples of Diatoms. They are a type a sea Algae. They make hard glass like structures and get their energy from sun light. </h1>
</section> 
            </section>

        </div>
        </Layout>
    );
};

export default Algae;