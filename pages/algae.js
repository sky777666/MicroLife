import React, {useState, useEffect} from 'react';
import ReactPlayer from 'react-player/'
import Footer from '../components/Footer';
import Layout from '../components/Layout'
import MyCarousel from '../components/MyCarousel'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

const Algae = () => {

    useEffect(() => {
    document.body.style.backgroundColor = '#4a5f6b'
    })


    const [ news, setNews] = useState([])

    //fetch news
    
    const fetchNews = () => {
        fetch("http://hn.algolia.com/api/v1/search?query=diatoms")
        // fetch("http://hn.algolia.com/api/v1/search?query=foo&tags=story")
        .then(result => result.json())
         .then(data => setNews(data.hits))
        //  .then(data => console.log(data));
      .catch(error => console.log(error));
    };

    useEffect(() => {
        fetchNews()
    })
    

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


        <div>
            <section style={{width: "100%", height:"100vh",display:"flex",justifyContent:"center",backgroundColor: "blue",}}>
                <div style={{ height:"100vh",width: "100%", }}>
                    <div style ={{ display: "flex", alignContent: "center",position: "relative",left: '5%',width: "100%", padding:"70px",}}>
                     <ReactPlayer url="https://www.youtube.com/watch?v=eVZlVB0SD-8&t=2s" controls={true} loop ={true} muted={false} autoplay={false} background={true} playing={false} width='80vw' height='550px'  />
                    </div>
                </div>
            </section>
             <section style={{width: "100%", height:"80vh",display:"flex",justifyContent:"center",backgroundColor: "gray", textAlign:"center", alignContent:"center"}}>
             <div style={{ height:"100vh",width: "100%", }}>
                {/* <div className={styles.cardArea}> */}
                 <div className={styles.upSplash2}>
                <img src="https://source.unsplash.com/400x400/?microscope" />
                </div>

                    <div> <h1 style={{ padding:"30px"}}>Microscopes allow us to see into the microscopic world </h1></div>
               
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
                 <img width="350px" height="350px" src="https://i.pinimg.com/236x/e9/7f/dd/e97fdd0ba8ae92864f7854cf8fa2f49e.jpg " alt="Avatar" />
                     </div>
                          <div className={styles.flipcardback}>
                             <img width="350px" height="350px" src="https://i.pinimg.com/236x/80/5f/cb/805fcb2f373ae6788dc727bc8f91b92f.jpg" alt="Avatar" />
                             {/* <StarRating /> */}
                         </div>
                    </div>
                </div>
                <div className={styles.flipcard}>
            <div className={styles.flipcardinner}>
             <div className={styles.flipcardfront}>
                         <img width="350px" height="350px" src="https://i.pinimg.com/236x/56/47/4a/56474a101fa0c79d3b0dd91a5c1d34f4.jpg" alt="Avatar" />
                            </div>
                                 <div className={styles.flipcardback}>
                                <img width="350px" height="350px" src=" https://i.pinimg.com/236x/af/3b/30/af3b3081a0625fd0dd45e4212a7db299.jpg" alt="Avatar" />
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
                <img width="350px" height="350px" src="https://i.pinimg.com/236x/eb/0d/ca/eb0dcab495286e6d9629d2d8b5092523.jpg" alt="Avatar" />
            </div>
            <div> 
                
            </div>
        </div>
 </div>
      <h1 style={{ padding:"45px", textAlign:"center"}}> These are examples of Diatoms. They are a type a sea Algae. They make hard glass like structures and get their energy from sun light. </h1>
    </section> 
            </section>
                <section>
                 <div>
                 <h2 style={{ padding:"45px", textAlign:"center"}}>These are news headlines about Diatoms from around the world.</h2>
                  {news.map((n, i) => ( <p key={i}> {n.title} </p> ))}
                 </div>
                </section>
        </div>
        </Layout>
    );
};

export default Algae;