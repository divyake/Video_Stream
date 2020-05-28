import React from 'react';
import {Grid} from '@material-ui/core';

import VideoItems from './videotem'

const   VideoList = ({ videos, onVideoSelect }) => {
    const listOfVideos = videos.map((video, id) => <VideoItems onVideoSelect={onVideoSelect} key = {video.id.videoId} video={video}/>)
    return (<Grid container spacing={10}>{listOfVideos}</Grid>);
}

export default VideoList;