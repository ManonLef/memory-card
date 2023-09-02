export default function Card({key, src, onClick, alt}) {
  return (
    <div>
      <img key={key} src={src} alt={alt} onClick={onClick} width="100"/>
      <div>{alt}</div>
    </div>
  )
}