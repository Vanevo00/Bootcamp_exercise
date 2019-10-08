import React from 'react';
import ReactDOM from 'react-dom';

import CarriageRow from "./carriage-row/carriage-row.jsx"
import './index.scss';
import './index.html';

class App extends React.Component {
  //function to create all carriage rows, if more rows are needed, just increase the number in the for loop
  // createCarriage = () => {
  //   const carriage = [];

  //   for (let i = 0; i < 7; i++) {
  //     carriage.push(<CarriageRow row={i}/>)
  //   }

  //   return carriage;
  // }
  
  render() {
    return (
      <>
        <CarriageRow
          row={1}
          availability="tttt"
        />
        <CarriageRow
          row={2}
          availability="ftft"
        />
        <CarriageRow
          row={3}
          availability="ttff"
        />
        <CarriageRow
          row={4}
          availability="ffft"
        />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
