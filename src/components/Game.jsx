import { useState } from "react";
import Cards from "./Cards";
import EndGame from "./EndGame";
import NewGameButton from "./NewGameButton";
import PropTypes from 'prop-types';

export default function Game({ highScore, setHighScore, startNewGame }) {
  const [endGame, setEndGame] = useState(false);
  const [score, setScore] = useState(0);

  function addPoint() {
    setScore(score + 1);
  }

  function gameComplete() {
    setEndGame(!endGame);
    if (score > highScore) setHighScore(score);
  }

  if (!endGame)
    return (
      <div className="text-xl font-bold">
        <div className="flex-col p-4">
          <div>score: {score}</div>
          <div>highScore: {highScore}</div>
          <a className="text-xs underline text-indigo-100 hover:text-indigo-200" href="https://github.com/ManonLef/memory-card">Credits and repo - Manon Lef</a>
        </div>
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
        <NewGameButton startNewGame={startNewGame} />
      </div>
    );
}

Game.propTypes = {
  highScore: PropTypes.number,
  setHighScore: PropTypes.func,
  startNewGame: PropTypes.func,
}
