import React, { useState } from 'react'
import Dice from './Dice.jsx'
import './App.css'

function App() {
  const [isRolling, setIsRolling] = useState(null);
  const [playerName, setPlayerName] = useState(null);
  const [diceOne, setDiceOne] = useState(0);
  const [diceTwo, setDiceTwo] = useState(0);
  const [result, setResult] = useState("Start Game");

  const handleRoll = () => {
    if(playerName && !isRolling) {
      setIsRolling(true)
      for (let i = 0; i < 6; i++) {
        setResult("Rolling...");
        setTimeout(() => {
          const dice_one = Math.floor(Math.random() * 5);
          const dice_two = Math.floor(Math.random() * 5);
          setDiceOne(dice_one);
          setDiceTwo(dice_two);
          if (i === 5) {
            if(dice_one > dice_two) {
              setResult(`${playerName} Wins!`);
            }else if(dice_one < dice_two) {
              setResult("Player 2 Wins!");
            }else {
              setResult("DRAW");
            }
          }
        }, i*500);
      }
      setTimeout(() => {
        setIsRolling(false);
      }, 3100);
    }
  }

  const handleKeyUp = (e) => {
    if(e.key === "Enter") {
      setPlayerName(e.target.value);
      setIsRolling(false);
    }
  }

  
  
  return (
    <>
      <h1>{result}</h1>
      <div className='board'>
        <div className='player'>
          {playerName ? <h2> {playerName} </h2> : <input type="text" onKeyUp={handleKeyUp} placeholder='type a name then press enter'/>}
          <Dice dice={diceOne}/>
        </div>
        <div className='player'>
          <h2>Player 2</h2>
          <Dice dice={diceTwo}/>
        </div>
      </div>
      <button onClick={handleRoll} className='roll-btn' disabled={isRolling}>ROLL</button>
    </>
  )
}

export default App
