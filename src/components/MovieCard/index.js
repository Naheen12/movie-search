import { Component } from 'react';
import './index.css'; 

class MovieCard extends Component {
  state = {
    dogImage: '',
  };

  componentDidMount() {
    this.fetchDogImage();
  }

  fetchDogImage = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      this.setState({ dogImage: data.message });
    } catch (error) {
      this.setState({ dogImage: 'https://via.placeholder.com/150' });
    }
  };

  render() {
    const { movie } = this.props;
    const { dogImage } = this.state;

    return (
      <div className="movie-card">
        <img src={dogImage} alt="Random Dog" />
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.author}</p>
          <p>{movie.year}</p>
        </div>
      </div>
    );
  }
}

export default MovieCard;
