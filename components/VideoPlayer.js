import React from 'react';
import ReactPlayer from 'react-player/'


const VideoPlayer = (props) => {
    return (
        <div>
            <div style ={{
            position: "relative",
            width: "100%  !important",
            height: "auto !important",
            objectFit: "cover",}}>
            <ReactPlayer url={props.video} controls={false} loop ={true} muted={true} autoplay={true} background={true} playing={true}   width ="100%"
            height ="90vh" />
            </div>
        </div>
    );
};

export default VideoPlayer;