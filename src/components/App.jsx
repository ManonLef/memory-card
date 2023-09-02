import { useState } from "react";
import Game from "./Game";

function App() {
  const [highScore, setHighScore] = useState(0);
  const [newGame, setNewGame] = useState(1)

  function startNewGame() {
    setNewGame(newGame + 1)
  }

  return (
    <div>
      <Game key={newGame} highScore={highScore} setHighScore={setHighScore} />
      <button onClick={startNewGame}>new game?</button>
    </div>
  );
}

export default App;
