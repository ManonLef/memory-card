export default function Card({ id, src, onClick, alt }) {
  return (
    <div className="p-2 flex-col text-center bg-white hover:bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="p-2 mx-auto" key={id} src={src} alt={alt} onClick={onClick} width="170" />
      <div>{alt}</div>
    </div>
  );
}
