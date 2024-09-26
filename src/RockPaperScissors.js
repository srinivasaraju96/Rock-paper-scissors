import { useState } from "react";

function RockPaperScissors(){
    const[result,setResult]=useState("")
    const[playerScore,setPlayerScore]=useState(0)
    const[computerScore,setComputerScore]=useState(0)
    const[player,setPlayer]=useState("")
    const[computer,setComputer]=useState("")
    function getRandomChoice(){
        const choice=["Rock","Paper","Scissors"]
        const randomChoice=Math.floor(Math.random()*3)
        return choice[randomChoice]
    }
    function handleClick(event){
        const computerResult=getRandomChoice()
        const playerResult=event.target.textContent
        setPlayer(playerResult)
        setComputer(computerResult)
        if(playerResult===computerResult){
            setResult("Draw")
        }
        else if(playerResult==="Rock" && computerResult==="Scissors"){
            setResult("You Won")
            setPlayerScore(playerScore+1)
        }
        else if(playerResult==="Scissors" && computerResult==="Paper"){
            setResult("You Won")
            setPlayerScore(playerScore+1)
        }
        else if(playerResult==="Paper" && computerResult==="Rock"){
            setResult("You Won")
            setPlayerScore(playerScore+1)
        }
        else{
            setResult("Computer Won")
            setComputerScore(computerScore+1)
        }

    }
    function handleRestart(){
        setResult("")
        setPlayerScore(0)
        setComputerScore(0)
        setPlayer("")
        setComputer("")
    }
    return(
        <div className="main-class">
            <div className="rock-paper-scissors">
                <h1>Rock Paper Scissors</h1>
            </div>
            <div className="rock-paper-scissors">
                <h2>Scores</h2>
                <p>Player:<span>{playerScore}</span></p>
                <p>Computer:<span>{computerScore}</span></p>
            </div>
            <div className="rock-paper-scissors">
                <button type="button" onClick={handleClick}>Rock</button>
                <button type="button" onClick={handleClick}>Paper</button>
                <button type="button" onClick={handleClick}>Scissors</button>
                
            </div>
            <div className="rock-paper-scissors">
                <p>You Chose:<span>{player}</span></p>
                <p>Computer Chose:<span>{computer}</span></p>
            </div>
            <div className="rock-paper-scissors">
                <p className="result">{result}</p>
            </div>
            <div className="rock-paper-scissors">
                <button type="button" onClick={handleRestart}>Restart game</button>
            </div>
        </div>
    )
}


export default RockPaperScissors;