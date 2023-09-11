export default function EndGame({ score, highScore, setHighScore }) {
  return (
    <div className="text-xl font-bold p-4">game ended with {score} points </div>
  );
}
