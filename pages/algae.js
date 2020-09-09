import React from 'react';
import YoutubePlayList from '../components/YoutubePlayList'
import VideoPlayer from '../components/VideoPlayer';
import CardSmall from '../components/CardSmall'
import Layout from '../components/Layout'


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
                <div style={{
                    height:"75vh",
                    width:"75 vh",
                }}>
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

            </section>
        </div>
        </Layout>
    );
};

export default Algae;