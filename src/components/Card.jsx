export default function Card({ id, src, onClick, alt }) {
  return (
    <div>
      <img key={id} src={src} alt={alt} onClick={onClick} width="100" />
      <div>{alt}</div>
    </div>
  );
}
