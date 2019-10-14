import React from 'react';
import ReactDOM from 'react-dom';
import Celebrities from './Celebrities/Celebrities.jsx';

import './index.scss';
import './index.html';

class App extends React.Component {
  render() {
    return (
      <>
        <Celebrities 
          url="http://www.cbp-exercises.test:8081/day26-laravel/morning_exercise/API/"
        />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
