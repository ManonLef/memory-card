import { useState } from "react";
import Game from "./Game";

function App() {
  const [highScore, setHighScore] = useState(0);
  const [newGame, setNewGame] = useState(1);

  function startNewGame() {
    setNewGame(newGame + 1);
  }

  return (
    <div className="text-white uppercase tracking-widest bg-gradient-to-t from-indigo-900 to-purple-400">
      <Game
        key={newGame}
        highScore={highScore}
        setHighScore={setHighScore}
        startNewGame={startNewGame}
      />
    </div>
  );
}

export default App;
