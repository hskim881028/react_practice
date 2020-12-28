import React from "react";
import PropTypes from "prop-types";

// state 가 필요없는경우 function component로 하면됨
function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <h4>
          {genres.map((genre) => {
            return <li>{genre}</li>;
          })}
        </h4>
      </div>
      <img src={poster} alt={title} title={title} />
    </div>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
};

export default Movie;
