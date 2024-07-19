import { Component } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

import './App.css'; 

class App extends Component {
  state = {
    query: '',
  };

  handleSearch = (query) => {
    this.setState({ query });
  };

  render() {
    return (
      <div className="app">
        <h1>Movie Search</h1>
        <SearchBar onSearch={this.handleSearch} />
        <MovieList query={this.state.query} />
      </div>
    );
  }
}

export default App;
