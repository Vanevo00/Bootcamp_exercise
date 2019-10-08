import React from 'react';
import ReactDOM from 'react-dom';

import Forecast from './forecast/forecast.jsx';
import './index.scss';
import './index.html';

class App extends React.Component {
  render() {
    return (
      <Forecast 
        day="Mon" 
        tempDay="18°"
        tempNight="11°" 
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
