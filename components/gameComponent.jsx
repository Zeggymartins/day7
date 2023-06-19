import { useState } from "react";
import BoardComponent from "./boardComponent";

export default function GameComponent(){
    // const [xIsNext, SetxIsNext]= useState(true)
    const [history, SetHistory]= useState([Array(9).fill(null)])
    const [currentmove, Setcurrentmove]= useState(0)
    const currentSquares= history[currentmove];
    const xIsNext=  currentmove % 2 === 0;
    function handleplay(nextSquares){
        const nexthistory= [...history.slice(0, currentmove + 1), nextSquares]
          SetHistory(nexthistory)
          Setcurrentmove(nexthistory.lenght-1)
        //   SetxIsNext(!xIsNext)
    }
    function JumpTo(nextmove){
        Setcurrentmove(nextmove)
        // SetxIsNext(nextmove % 2 === 0)

    }
        const moves= history.map((squares, move)=>{
        
            let description;
            if(move>0){
                description= "Go to" + move
            }
            else{
                description= "Go to game start";
            }
            return (
                <li key={move}>
        <button onclick={()=>JumpTo(move)}>{description}</button> </li>
            )
        })
    
       
    return(
        <div>
            <div>
                <BoardComponent xIsNext={xIsNext} squares={currentSquares} onPlay={handleplay}/>
            </div>
            <div>
                <ol>{moves}</ol>
            </div>
        </div>
    )
    
}