import React from 'react';
import ReactPlayer from 'react-player/'


const VideoPlayer = () => {
    return (
        <div>
            <div style ={{
            position: "relative",
            width: "100%  !important",
            height: "auto !important",
            objectFit: "cover",
         
            
            }}>
            <ReactPlayer url="https://www.youtube.com/watch?v=JZjzQhFG6Ec&t=132s" controls={true} loop ={true} muted={false} autoplay={false} background={true} playing={false}   width ="100%"
            height ="90vh" />
            </div>
        </div>
    );
};

export default VideoPlayer;