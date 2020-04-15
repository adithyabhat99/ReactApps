import React from "react";
import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) =>{
    const listOfVideos = videos.map((video)=><VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect}/>)                
    return (
        <Grid container spacing={10}>
            {listOfVideos}
        </Grid>
    )
}
export default VideoList;