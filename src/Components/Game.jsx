import React, { useState , useEffect} from 'react'
import { createRoot } from 'react-dom/client'
import './Game.css'
import stone from "../Assets/stone.png"
import paper from "../Assets/paper.png"
import scissor from "../Assets/scissor.png"

const Game = () =>{

    let [pcount,pchangeCount] = useState(0)
    let [ccount,cchangeCount] = useState(0)
    let [round,changeRound] = useState(0)
    let [streak,changeStreak] = useState(0)
    let [result,changeResult]=useState(false)
    let [winner,changeWinner]=useState("")
    let [pmove,changePmove]=useState("")
    let [cmove,changeCmove]=useState("")
    

    let playerMove=(move)=>{
        changeResult(true)
        changePmove(move)
        let num=Math.random()
        let comp
        changeResult(true)

        if (num>0.66){
            comp="stone"
            changeCmove("stone")
        }else if (num>0.33){
            comp="paper"
            changeCmove("paper")
        }else{
            comp="scissor"
            changeCmove("scissor")
        }

        if ((comp=="stone" && move=="paper")  || (comp=="paper" && move=="scissor") || (comp=="scissor" && move=="stone")){
            changeWinner("you")
            pchangeCount(pcount+1)
            changeRound(round+1)

        }else if ((move=="stone" && comp=="paper")  || (move=="paper" && comp=="scissor") || (move=="scissor" && comp=="stone")){
            changeWinner("comp")
            cchangeCount(ccount+1)
            changeRound(round+1)
        }else{
            changeWinner("tie")
            changeRound(round+1)
        }

    }


    let reset=()=>{
        changeResult(false)
        pchangeCount(0)
        cchangeCount(0)
        changeRound(0)
        changeCmove("")
        changePmove("")
    }

    return(
        <div>
            <h1 className='heading'>Stone Paper Scissor using
                <span className='react' style={{color:" rgb(129, 247, 222)" , paddingLeft:"15px"}}>React</span>
            </h1>

            {!result && <h1 className='tag-line'>You Can Start</h1> }
            
            {result && winner=="you" && <h1 className='tag-line'> You <span className='winner' style={{color:"rgb(129, 247, 222)" , paddingLeft:"10px"}}> WON</span></h1>}
            {result && winner=="comp" && <h1 className='tag-line'> You <span className='winner' style={{color:"#FF3131" , paddingLeft:"10px"}}> LOOSE</span></h1>}
            {result && winner=="tie" && <h1 className='tag-line'> It's a <span className='winner' style={{color:"#39b78d" , paddingLeft:"10px"}}> TIE</span></h1>}

            <div className='scores'>
                <h1>Round : <span style={{color:"#FFD60A",paddingLeft:"10px"}}>{round}</span></h1>
                <h1>Player : <span style={{color:"#FFD60A",paddingLeft:"10px"}}>{pcount}</span></h1>
                <h1>Computer : <span style={{color:"#FFD60A",paddingLeft:"10px"}}>{ccount}</span></h1>
            </div>

            <div className='board'>
                <div className='move'>
                    <h1 className='move-heading' style={{margin:"0px"}}>YOU</h1>
                    
                    {pmove=="stone" && <img src={stone} alt="" srcset="" className='img'/>}
                    {pmove=="paper" && <img src={paper} alt="" srcset="" className='img'/>}
                    {pmove=="scissor" && <img src={scissor} alt="" srcset="" className='img'/>}
                </div>
                <div className='move'>
                    <h1 className='move-heading' style={{margin:"0px"}}>COMPUTER</h1>
                    
                    {cmove=="stone" && <img src={stone} alt="" srcset="" className='img'/>}
                    {cmove=="paper" && <img src={paper} alt="" srcset="" className='img'/>}
                    {cmove=="scissor" && <img src={scissor} alt="" srcset="" className='img'/>}
                </div>
            </div>

            {result && <h1 className='tag-line' style={{marginTop:"50px",marginBottom:"20px"}}>What's your next Move ?</h1> }

            <div className='grp-btn' >

                <button className='btns' onClick={()=>{playerMove("stone")}} >STONE</button>
                <button className='btns' onClick={()=>{playerMove("paper")}} >PAPER</button>
                <button className='btns' onClick={()=>{playerMove("scissor")}} >SCISSOR</button>

            </div>
            <button className='reset' onClick={()=>{reset()}}>Reset</button>

        </div>
    )
}

export default Game