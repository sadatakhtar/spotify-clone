import React, { useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from './components/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';
import { useDataLayerValue} from './DataLayer';

const spotify = new SpotifyWebApi();


function App() {
  const [{user, token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        });
      })
      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
        
      })
      
    }
    spotify.getPlaylist('341krk8znfevpbu60s3r93hv5').then(response => 
      dispatch({
        type: 'SET_DISCOVER_WEEKLY',
        discover_weekly: response,
        
      }))
      
     
  }, [dispatch]);
 console.log(user)
  return (
    <div className="App">
      {token ? (<Player spotify={spotify}/>) : (
         <Login />
      )}
     
    </div>
  );
}

export default App;
