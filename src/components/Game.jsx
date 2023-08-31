import { useState } from "react";
import Cards from "./Cards";

export default function Game() {
  const [endGame, setEndGame] = useState(false);
  const [score, setScore] = useState(0);

  function addPoint() {
    setScore(score + 1);
  }

  function gameComplete() {
    setEndGame(!endGame);
    console.log("end game")
  }

  if (!endGame) return (
  <div>
    <div>score: {score}</div>
    <Cards scoreUp={addPoint} end={gameComplete} />
  </div>
  )
  else return (
    <div>
      end score {score}
    </div>
  );
}
