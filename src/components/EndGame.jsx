export default function EndGame({ score, highScore, setHighScore, startNewGame }) {
  function handleHigh() {
    if (score > highScore) setHighScore();
  }

  return (
    <div>
      game ended with {score} points{" "}
      <button
        onClick={startNewGame}
        class="bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-4 rounded">
        new game?
      </button>
    </div>
  );
}
