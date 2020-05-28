import React, {useState, useEffect} from 'react';
import SearchBar from './components/searchBar';
import VideoDetails from './components/videoDetails';
import VideoList from './components/videoList';

import {Grid} from '@material-ui/core';

import youtube from './api/youtube';



class App extends React.Component{
   
    state = {
        videos: [],
        selectedVideos: null,
        theme : ({mode:'dark'}),
        
    
    };

    componentDidMount (){
        this.handleSubmit('learn reactjs')
    }

    onVideoSelect = (video) => {
this.setState({selectedVideos  : video})
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', { params: {
            part : 'snippet',
            maxResults : 5,
            key : 'AIzaSyCPch1B4Cmatt2hZ8xdp9eoiv02M6_gMEU',
            q : searchTerm,
        }
    });

    this.setState({ videos: response.data.items, selectedVideos: response.data.items[0] });
  
    };

    onChangeTheme = (theme) => {

        this.setState({theme: theme});
    }

    render () 
    {
        
        const { selectedVideos,videos } = this.state;
        return (
            
            <Grid justify="center" container spacing ={8}>
              
                <Grid item xs={12}>
                
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                           <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                          <VideoDetails video={selectedVideos}/> 
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
                        </Grid>
                    
                    </Grid>
                </Grid>
               
            </Grid>
         
            


        )
    }
}

export default App;