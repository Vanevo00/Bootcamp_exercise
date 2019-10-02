class Bus {
  constructor(direction, stations, seats, passengers, lastStation) {
    this.direction = direction;
    this.stations = stations;
    this.seats = seats;
    this.passengers = passengers;
    this.lastStation = lastStation; // index of last station the bus stopped in
  }

  current() {
    return this.lastStation;
  }

  next() {
    this.lastStation += 1;
  }

  board(count) {
    if (this.passengers + count > this.seats) {
      this.passengers = this.seats;
    } else {
      this.passengers += count;
    }
  }

  unboard(count) {
    if (this.passengers < count) {
      this.passengers = 0;
    } else {
      this.passengers -= count;
    }
  }
}

const bus1 = new Bus('Prague to Vienna', ['Praha', 'Jihlava', 'Brno', 'Břeclav', 'Vídeň'], 60, 40, 1);
