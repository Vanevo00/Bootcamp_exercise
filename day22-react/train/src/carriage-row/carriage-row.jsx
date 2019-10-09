import React from 'react';
import Seat from "../seat/seat.jsx";

export default class CarriageRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      availability: this.props.availability,
    }
  }
  
  checkAvailability(seat) {
    switch (seat) {
      case "t":
        return "free";
        break;
      case "s":
        return "selected";
        break;
      default:
        return "occupied";
    }
  }

  
  
  render() {
    return (
      <div className="carriage-row">
        <Seat
          availability={this.checkAvailability(this.state.availability[0])}
          seatNo={this.props.row * 4 + 1}
        />
        <Seat
          availability={this.checkAvailability(this.state.availability[1])}
          seatNo={this.props.row * 4 + 2}
        />
        <div className="aisle-spacer"></div>
        <Seat
          availability={this.checkAvailability(this.state.availability[2])}
          seatNo={this.props.row * 4 + 3}
        />
        <Seat
          availability={this.checkAvailability(this.state.availability[3])}
          seatNo={this.props.row * 4 + 4}
        />
      </div>
    );
  }
}