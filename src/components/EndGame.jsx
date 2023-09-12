import PropTypes from "prop-types";

export default function EndGame({ score}) {
  return (
    <div className="text-xl font-bold p-4">game ended with {score} points </div>
  );
}

EndGame.propTypes = {
  score: PropTypes.number,
};
