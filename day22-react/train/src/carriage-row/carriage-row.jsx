import React from 'react';
import Seat from "../seat/seat.jsx";

export default class CarriageRow extends React.Component {
  checkAvailability(seat) {
    if (seat === "t") {
      return "free";
    }
    return "occupied";
  }
  
  render() {
    return (
      <div class="carriage-row">
        <Seat
          availability={this.checkAvailability(this.props.availability[0])}
          seatNo={this.props.row * 4 + 1}
          onClick={this.handleClick}
        />
        <Seat
          availability={this.checkAvailability(this.props.availability[1])}
          seatNo={this.props.row * 4 + 2}
        />
        <div class="aisle-spacer"></div>
        <Seat
          availability={this.checkAvailability(this.props.availability[2])}
          seatNo={this.props.row * 4 + 3}
        />
        <Seat
          availability={this.checkAvailability(this.props.availability[3])}
          seatNo={this.props.row * 4 + 4}
        />
      </div>
    );
  }
}