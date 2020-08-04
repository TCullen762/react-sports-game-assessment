
import React from 'react';
function Team (props){
    return(
        <div className='game'>
            Team Component
        </div>

    )

}

export default Team;



/*class Team extends React.Component {
    /* constructor(props){
         super(props)
         this.state ={
             shots: 0,
             score: 0
         }
         
     }
 
    
     render(){
         let shotPercentageDiv //Do not understand how this can be a variable with nothin in it
         if(this.state.shots){
         const shotPercentage = Math.round((this.state.score / this.state.shots) * 100)
         shotPercentageDiv = (<div>
                 <strong>Chances for success are % {shotPercentage}</strong>
                 </div>)
         }
         return (
             <div className = "Team">
                 <h2>{this.props.name}</h2>
                 <div className="identity">
                 <img src ={this.props.logo} alt={this.props.name}/>
                 </div>
                <div>
                 <strong>Shots:</strong>{this.state.shots}  
                </div>   
 
                <div>
                 <strong>Score:</strong>{this.state.score}  
                </div>    
 
                <div>
                <strong> {this.state.score}</strong>
                </div>  
                {shotPercentageDiv}
 
                <button onClick= {this.shotHandler}>Shoot</button>
                  </div>
         )
     }
 
     
 }*/