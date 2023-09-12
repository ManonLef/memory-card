import PropTypes from "prop-types";

export default function NewGameButton({ startNewGame }) {
  return (
    <button
      onClick={startNewGame}
      className="uppercase tracking-widest m-4 bg-white text-indigo-500 hover:bg-fuchsia-200 font-bold py-2 px-4 rounded">
      play again?
    </button>
  );
}

NewGameButton.propTypes = {
  startNewGame: PropTypes.func,
};
