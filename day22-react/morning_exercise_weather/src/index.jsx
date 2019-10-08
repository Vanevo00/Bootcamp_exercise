import React from 'react';
import ReactDOM from 'react-dom';

import Forecast from './forecast/forecast.jsx';
import './index.scss';
import './index.html';

const weatherArr = [
  {
    weekday: 'Mon',
    weather: 'cloudy',
    tempDay: 18,
    tempNight: 11,
  },
  {  
    weekday: 'Tue',
    weather: 'partly-cloudy',
    tempDay: 21,
    tempNight: 15,
  },
  {  
    weekday: 'Wed',
    weather: 'rainy',
    tempDay: 8,
    tempNight: 1,
  },
  {  
    weekday: 'Thu',
    weather: 'snowy',
    tempDay: -2,
    tempNight: -7,
  },
  {  
    weekday: 'Fri',
    weather: 'stormy-rain',
    tempDay: 28,
    tempNight: 21,
  },
  {  
    weekday: 'Sat',
    weather: 'stormy',
    tempDay: 35,
    tempNight: 27,
  },
  {  
    weekday: 'Sun',
    weather: 'sunny',
    tempDay: 28,
    tempNight: 22,
  },
];


class App extends React.Component {
  render() {
    return (
      <>
      {
        weatherArr.map(oneDay => (
          <Forecast
            day={oneDay.weekday}
            tempDay={oneDay.tempDay}
            tempNight={oneDay.tempNight}
            weather={oneDay.weather}
          />
        ))
      }
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('week-forecast'));
