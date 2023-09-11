export default function NewGameButton({ startNewGame }) {
  return (
    <button
      onClick={startNewGame}
      className="bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-4 rounded">
      new game?
    </button>
  );
}
