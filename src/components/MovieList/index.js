import { Component } from 'react';
import MovieCard from '..//MovieCard';

import './index.css'; 

class MovieList extends Component {
  state = {
    movies: [],
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      this.fetchMovies();
    }
  }

  fetchMovies = async () => {
    this.setState({ loading: true, error: null });
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${this.props.query}`);
      const data = await response.json();
      const movies = data.docs.map((doc) => ({
        title: doc.title,
        author: doc.author_name ? doc.author_name[0] : 'Unknown',
        year: doc.first_publish_year,
      }));
      this.setState({ movies, loading: false });
    } catch (error) {
      this.setState({ error: 'Failed to fetch movies', loading: false });
    }
  };

  render() {
    const { movies, loading, error } = this.state;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
      <div className="movie-list">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    );
  }
}

export default MovieList;
