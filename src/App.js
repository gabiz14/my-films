import React, { Component } from 'react';
import './App.css';
import Table from './Table';
import Form from './Form';

class App extends Component {
  state = {
    films: []
  };

  handleSubmit = films => {
    this.setState({films: [...this.state.films, films]});
  }

  removeFilm = index => {
    const { films } = this.state;

    this.setState({
      films: films.filter((films, i) => {
        return i !== index;
      })
    });
  }

  render() {
    const { films } = this.state;

      return (
        <div className="container">
            <Table 
              filmsData={films}
              removeFilm={this.removeFilm} 
            />
            <Form handleSubmit={this.handleSubmit} />
        </div>
    );
  }
}
export default App;
