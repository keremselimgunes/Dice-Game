import React from "react";
import dice1 from '../src/assets/dice1.png'
import dice2 from '../src/assets/dice2.png'
import dice3 from '../src/assets/dice3.png'
import dice4 from '../src/assets/dice4.png'
import dice5 from '../src/assets/dice5.png'
import dice6 from '../src/assets/dice6.png'

const dices = [dice1, dice2, dice3, dice4, dice5, dice6];

function Dice({ dice }) {
  return ( 
    <>
      <img src={dices[dice]} alt={`dice rolled by player: ${dice + 1}`} />
    </>
  )
}

export default Dice