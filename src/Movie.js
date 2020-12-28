import React from "react";
import PropTypes from "prop-types";

// state 가 필요없는경우 function component로 하면됨
function Movie({ id, year, title, summary, poster }) {
  return <h4>{title}</h4>;
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
