
import React from 'react';
import Team from '../team/team.js';



class Game extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        homeTeamStats:{
                shots: 0,
                score:0
            },
        visitingTeamStats:{
            shots:0,
            score:0
        }

        }

        /*this.shotSound = new Audio('/Users/cullen762/Documents/assessments/reactBasics_sportsGame/assets/bat+hit+ball.wav')
        this.scoreSound = new Audio('/Users/cullen762/Documents/assessments/reactBasics_sportsGame/assets/cheers.wav')*/

        
    }
    shotHandler =(team) => {
        /*const teamStatsKey = '${team}TeamStats'*/
        let score = this.state.score
        /*this.shotSound.play()*/
        
        if (Math.random() > 0.5){
            score += 1

          /*  setTimeout(() => {
                this.scoreSound.play("/Users/cullen762/Documents/assessments/reactBasics_sportsGame/assets/cheers.wav")
            }, 1000)*/
            
     }
        this.setState((state,props) =>({
            shots:state.shots + 1,
            score
        }))
    }


render(){
    return (
<div className = "Game">
<h1>Welcome to {this.props.venue} </h1>
<div className="stats">
    <div>
      <Team 
      name = {this.props.visitingTeam.name}
      logo = {this.props.visitingTeam.logoSrc}
      stats = {this.state.visitingTeamStats}
       /> 
      <br/>

      <div className="versus">
      <h1>VS!</h1></div>
      <Team 
      logo ={this.props.homeTeam.logoSrc}
      stats ={this.state.homeTeamStats}
       /> 
       </div>
</div>
</div>
)

}
}

export default Game;


