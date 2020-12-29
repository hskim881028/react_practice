import * as React from "react";
type MovieProps = {
  title: string;
  poster: string;
  genres: string[];
};

const Movie: React.FC<MovieProps> = ({ title, poster, genres }) => (
  <div>
    <h1>{title}</h1>
    <h4>
      {genres.map((genre) => {
        return <li>{genre}</li>;
      })}
    </h4>
    <img src={poster} alt={title} title={title} />
  </div>
);

export default Movie;
