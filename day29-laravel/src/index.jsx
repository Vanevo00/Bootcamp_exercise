import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header.jsx';
import MoviesListShort from './MoviesListShort/MoviesListShort.jsx';
import MovieOfTheWeek from './MovieOfTheWeek/MovieOfTheWeek.jsx';

import './index.scss';
import './index.html';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />

        <main>

          <MoviesListShort />

          <MovieOfTheWeek />

        </main>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
