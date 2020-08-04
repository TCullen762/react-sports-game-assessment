import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from'./components/game/game.js';
import Team from './components/team/team.js';
import Score from './components/scoreboard/scoreboard.js';

function App() {
  return (
    <div className="App">
      <Game/>
      <Team/>
      < Score/>
    </div>
  );
}

export default App;
