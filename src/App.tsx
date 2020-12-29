import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );

    console.log(movies);
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        <div>
          {" "}
          {isLoading ? (
            <div className="loader">
              <span className="loader_text">Loading...</span>
            </div>
          ) : (
            movies.map(({ id, title, medium_cover_image, genres }) => {
              return (
                <Movie
                  title={title}
                  poster={medium_cover_image}
                  genres={genres}
                />
              );
            })
          )}
        </div>
      </section>
    );
  }
}

export default App;
