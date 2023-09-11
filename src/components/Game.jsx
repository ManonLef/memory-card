import { useState } from "react";
import Cards from "./Cards";
import EndGame from "./EndGame";

export default function Game({ highScore, setHighScore, startNewGame }) {
  const [endGame, setEndGame] = useState(false);
  const [score, setScore] = useState(0);

  function addPoint() {
    setScore(score + 1);
  }

  function gameComplete() {
    setEndGame(!endGame);
    if (score > highScore) setHighScore(score);
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
  else
    return (
      <div>
        <EndGame
          score={score}
          setHighScore={setHighScore}
          highScore={highScore}
        />
        <button onClick={startNewGame} class="bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-4 rounded">new game?</button>
      </div>
    );
}
