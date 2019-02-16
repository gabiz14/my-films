import React, { Component } from 'react';
import './App.css';
import Table from './Table';
import Form from './Form';
import Head from './Head';
import Foot from './Foot';

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
            <Head />
            <Table 
              filmsData={films}
              removeFilm={this.removeFilm} 
            />
            <Form handleSubmit={this.handleSubmit} />
            <Foot />
        </div>
    );
  }
}
export default App;
