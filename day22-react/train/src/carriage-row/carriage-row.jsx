import React from 'react';
import Seat from "../seat/seat.jsx";

export default class CarriageRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      availability: this.props.availability,
      selectedSeat: null,
    }
  }

  handleSelect = (selectedSeat) => {
    this.setState({ selectedSeat: this.state.selectedSeat = selectedSeat });
    console.log(this.state.selectedSeat);
  }
  
  checkAvailability(seat) {
    // console.log(this.seatNo);
    // console.log(this.state.selectedSeat);
    // if (Seat.seatNo === this.state.selectedSeat) {
    //   return "selected";
    // }
    switch (seat) {
      case "t":
        return "free";
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
          onSelect={this.handleSelect}
          selected={this.props.row * 4 + 1 === this.state.selectedSeat}
        />
        <Seat
          availability={this.checkAvailability(this.state.availability[1])}
          seatNo={this.props.row * 4 + 2}
          onSelect={this.handleSelect}
          selected={this.props.row * 4 + 2 === this.state.selectedSeat}
        />
        <div className="aisle-spacer"></div>
        <Seat
          availability={this.checkAvailability(this.state.availability[2])}
          seatNo={this.props.row * 4 + 3}
          onSelect={this.handleSelect}
          selected={this.props.row * 4 + 3 === this.state.selectedSeat}
        />
        <Seat
          availability={this.checkAvailability(this.state.availability[3])}
          seatNo={this.props.row * 4 + 4}
          onSelect={this.handleSelect}
          selected={this.props.row * 4 + 4 === this.state.selectedSeat}
        />
      </div>
    );
  }
}