import { useState } from "react";
import Cards from "./Cards";
import EndGame from "./EndGame";

export default function Game() {
  const [endGame, setEndGame] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0)

  function addPoint() {
    setScore(score + 1);
    if (score + 1 > highScore) setHighScore(score + 1)
  }

  function gameComplete() {
    setEndGame(!endGame);
    console.log("end game");
  }

  if (!endGame)
    return (
      <div>
        <div>score: {score}</div>
        <div>highScore: {highScore}</div>
        <Cards scoreUp={addPoint} end={gameComplete} />
      </div>
    );
  else return <EndGame score={score} />;
}
