import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from'./components/game/game.js';
import Team from './components/team/team.js';
import Score from './components/scoreboard/scoreboard.js';

function App (props) {
  const rebels = {
      name: 'Cork Town Rebels',
      logoSrc:'/Users/cullen762/Documents/assessments/reactBasics_sportsGame/assets/th-1.jpg'
  }

  const rats = {
      name: 'Seattle Street Rats',
      logoSrc:'/Users/cullen762/Documents/assessments/reactBasics_sportsGame/assets/rat.jpg'
  }

  const karen = {
      name: 'California Karens',
      logoSrc:'/Users/cullen762/Documents/assessments/reactBasics_sportsGame/assets/download-2.jpg'

  }
  const retail ={
      name:'battered baristas',
      logoSrc:'/Users/cullen762/Documents/assessments/reactBasics_sportsGame/assets/retail.jpg'
  }

return (
    <div className="App">
      <Game venue=' Ikea arena'
      homeTeam={rats}
      visitingTeam={rebels}
      />
      <Game venue='corporate branded arena'
      homeTeam ={retail}
      visitingTeam={karen}
      />
     
  </div>
)
}

export default App;
