import { useState } from "react";

export default function EndGame({ score, highScore, setHighScore }) {

  function handleHigh() {
    if (score > highScore) setHighScore()
  }
  
  return <div>game ended with {score} points</div>
}
