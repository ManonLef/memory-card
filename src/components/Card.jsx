import PropTypes from "prop-types";

export default function Card({ id, src, onClick, alt }) {
  return (
    <div className="text-sm p-2 flex-col text-center bg-white bg-opacity-25 hover:bg-opacity-50 hover:bg-gray-100 rounded-lg">
      <img
        className="p-1 mx-auto"
        key={id}
        src={src}
        alt={alt}
        onClick={onClick}
        width="150"
        loading="eager"
      />
      <div>{alt}</div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.any,
  src: PropTypes.any,
  onClick: PropTypes.func,
  alt: PropTypes.string,
};
