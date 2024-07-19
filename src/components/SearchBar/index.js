import React, { Component } from 'react';
import './index.css';

class SearchBar extends Component {
  state = {
    query: '',
  };

  handleInputChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.query.trim()) {
      this.props.onSearch(this.state.query);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="search-bar">
        <input
          type="text"
          value={this.state.query}
          onChange={this.handleInputChange}
          placeholder="Search for a movie"
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;
