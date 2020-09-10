import React from 'react';
import Layout from '../components/Layout'
import ReactPlayer from 'react-player/'
import styles from '../styles/Home.module.css'

const Protozoa = () => {
    return (
        <Layout>
        <div style={{
            paddingTop:"70px",
            textAlign:"center",
        }}>
           
            <h1>Protozoa</h1>


           
        {/* <div className="signupSigninBackground"> */}
               <section className={styles.movie1}>
                    <div>
                        <h1>How Microscopic Hunters Get Their Lunch</h1>
                        <div className={styles.playerwrapper}>
                        <ReactPlayer className={styles.reactplayer}
                            url='https://www.youtube.com/watch?v=io731XY8fH8'width='50vw' height='50vh' />
                         </div> 
                    </div>
                    <div className={styles.movie2}>
                        <h1> How we Move</h1>
                        <div className={styles.playerwrapper}>
                        <ReactPlayer className={styles.reactplayer}
                            url='https://www.youtube.com/watch?v=bPwVOggUp4M'width='50vw' height='50vh' />
                         </div> 
                    </div>
                    <div className={styles.movie3}>
                        <h1> Tiny Giants</h1>
                        <div className={styles.playerwrapper}>
                            <ReactPlayer className={styles.reactplayer}
                            url='https://www.youtube.com/watch?v=PZoaKzEXzi8'width='50vw' height='50vh' />
                         </div> 
                    </div>
                    <div className={styles.movie4}>
                        <h1> How to Survive the Microcosmos</h1>
                        <div className={styles.playerwrapper}>
                        <ReactPlayer className={styles.reactplayer}
                            url='https://www.youtube.com/watch?v=Sb-gf0e534k'width='50vw' height='50vh' />
                         </div> 
                    </div>
                </section>
            
<section className={styles.section1}>
    <p> These are Diatoms. Diatoms are a major group of algae, specifically microalgae, found mostly in the oceans but also in some other waterways of the world</p>
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
        </div>
    </div>
</section> 
        </div>
        </Layout>
    );
};

export default Protozoa;