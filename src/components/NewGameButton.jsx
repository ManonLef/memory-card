export default function NewGameButton({ startNewGame }) {
  return (
    <button
      onClick={startNewGame}
      className="uppercase tracking-widest m-4 bg-white text-fuchsia-500 hover:bg-fuchsia-200 text-white font-bold py-2 px-4 rounded">
      play again?
    </button>
  );
}
