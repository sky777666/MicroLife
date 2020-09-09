import React from 'react';
import YoutubePlayList from '../components/YoutubePlayList'
import VideoPlayer from '../components/VideoPlayer';
import CardSmall from '../components/CardSmall'
import Layout from '../components/Layout'
import MyCarousel from '../components/MyCarousel'

const Algae = () => {
    return (
        <Layout>
        <div>
            <section style={{
                width: "100%",
                height:"90vh",
                display:"flex",
                justifyContent:"center",
                backgroundColor: "blue",
            }}>
                <div style={{
                    height:"90vh",
                    width: "100%",
                }}>
                    <VideoPlayer />
                </div>
            </section>


            <section style={{
                width: "100%",
                height:"70vh",
                display:"flex",
                justifyContent:"center",
                backgroundColor: "gray",
            }}>
                <div>
                <CardSmall />
                </div>
               

            </section>
            <section style={{
                width: "100%",
                height:"90vh",
                display:"flex",
                justifyContent:"center",
                backgroundColor: "green",
            }}>
                <div style={{
                    display:"flex",
                    height:"220vh",
                    width:"110vh",
                    alignContent:"center",
                    objectFit:"cover",
                    overflow:"hidden",
                    padding:"10px",
                }}>
                <MyCarousel />
                </div>   
            </section>
            <section style={{
                width: "100%",
                height:"70vh",
                display:"flex",
                justifyContent:"center",
                backgroundColor: "lightblue",
            }}>
                <div>
                <CardSmall />
                </div>
               

            </section>







        </div>
        </Layout>
    );
};

export default Algae;