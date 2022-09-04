import {React, useState} from "react";
// Importing Styles
import "./styles/app.scss"
//Importing Utils
import data from './util';
//Adding Components
import Player from "./components/Player";
import Song from "./components/Song";


function App() {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      {/* passing state here in currentSong to change */}
      <Song currentSong={currentSong}/>
      <Player/>
    </div>
  );
}

export default App;
