import React from 'react';
import './index.scss';

export default class Forecast extends React.Component {
  render() {
    return (
        <div className="day-forecast">
          <div className="day-forecast__header">{this.props.day}</div>
          <div className="day-forecast__body">
            <div className={`day-forecast__image weather-${this.props.weather}`}></div>
            <div className="day-forecast__temps">
              <span className="temp-day">{this.props.tempDay}°</span>
              <span className="temp-night">{this.props.tempNight}°</span>
            </div>
          </div>
        </div>
    );
  }
}
