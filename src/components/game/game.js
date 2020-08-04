
import React from 'react';
function Game (props){
    return(
        <div className='game'>
            Game Component
        </div>

    )

}

export default Game;


/*class Game extends React.Component{
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

        this.shotSound = new Audio('/Users/cullen762/Documents/assessments/reactBasics_sportsGame/assets/bat+hit+ball.wav')
        this.scoreSound = new Audio('/Users/cullen762/Documents/assessments/reactBasics_sportsGame/assets/cheers.wav')

        
    }
    shotHandler =(team) => {
        const teamStatsKey = '${team}TeamStats'
        let score = this.state.score
        this.shotSound.play()
        
        if (Math.random() > 0.5){
            score += 1

            setTimeout(() => {
                this.scoreSound.play("/Users/cullen762/Documents/assessments/reactBasics_sportsGame/assets/cheers.wav")
            }, 1000)
            
     }
        this.setState((state,props) =>({
            shots:state.shots + 1,
            score
        }))
    }


render(){
    return (
<div className = "Game">
<h1>Welcome to {props.venue} </h1>
<div className="stats">
    <div>
      <Team 
      name = {props.visitingTeam.name}
      logo = {props.visitingTeam.logoSrc}
      stats = {this.state.visitingTeamStats}
       /> 
      <br/>

      <div className="versus">
      <h1>VS!</h1></div>
      <Team 
      name = {props.homeTeam.name}
      logo ={props.homeTeam.logoSrc}
      stats ={this.state.homeTeamStats}
       /> 
       </div>
</div>
</div>
)

}
}*/