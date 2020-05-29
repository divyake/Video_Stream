import React, {useState, useEffect} from 'react';
import SearchBar from './components/searchBar';
import VideoDetails from './components/videoDetails';
import VideoList from './components/videoList';

import {Grid, IconButton} from '@material-ui/core';
import Brightness4TwoToneIcon from '@material-ui/icons/Brightness4TwoTone';
import {ThemeProvider, createGlobalStyle} from 'styled-components'


import youtube from './api/youtube';

const GlobalStyle =createGlobalStyle `
body{
    background-color: ${props => props.theme.mode === 'dark' ? '#111' : '#FFF'};
    color : ${props => props.theme.mode === 'dark' ? '#FFF' : '#111 '}
}
`

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideos, setSelectedVideos] = useState(null);
    const [theme, setTheme] = useState( {mode: 'dark'});
    const handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', { params: {
            part : 'snippet',
            maxResults : 5,
            key : 'AIzaSyCPch1B4Cmatt2hZ8xdp9eoiv02M6_gMEU',
            q : searchTerm,
        }

    })
    setVideos(response.data.items);
    setSelectedVideos(response.data.items[0]);};

    
    
    return(
    <Grid style={{justifyContent: 'center' }} container spacing ={10}>
       <ThemeProvider theme={theme}>       
    <Grid item xs={12}>
    <GlobalStyle/>
        <Grid container spacing={10}>
            <Grid item xs={12}>
               <SearchBar onFormSubmit={handleSubmit}/>
               <IconButton onClick={e => setTheme(theme.mode === 'dark' ? {mode: 'light'}: {mode: 'dark'})} style={{marginTop:'20px'}}>
                <Brightness4TwoToneIcon style={{fontSize:'40' , color:'#EEE'}}/>
                </IconButton>
            </Grid>
            <Grid item xs={8}>
              <VideoDetails video={selectedVideos}/> 
                
            </Grid>
            <Grid item xs={4}>
                <VideoList videos={videos} onVideoSelect={setSelectedVideos}/>
            </Grid>
        
        </Grid>
    </Grid>
    </ThemeProvider>
</Grid>

);
  
};



export default App;
