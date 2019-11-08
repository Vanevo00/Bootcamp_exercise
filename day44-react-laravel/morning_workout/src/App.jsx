import React from 'react';
import { runInThisContext } from 'vm';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      letters: "ABCDEFGHIJKLMN12", 
      // grid: [
      //     ["A", "B", "A", "B"],
      //     ["C", "D", "C", "D"],
      //     ["E", "F", "E", "F"],
      //     ["G", "H", "G", "H"],
      //     ["J", "K", "J", "K"],
      //     ["L", "I", "L", "I"]
      //   ]
    };
  }

  createPictionary = () => {
    let source = this.state.letters + this.state.letters;
    source = source.split("");

    for (let i = source.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = source[i];
      source[i] = source[j];
      source[j] = temp;
    }

    const grid = [];
    let copied = [...source]; 
    const numOfChild = Math.ceil(copied.length / 4);
    for (let i = 0; i < numOfChild; i++) {
      grid.push(copied.splice(0, 4));
    }    

    const pictionary = [];

    for (let row of grid) {
      const items = [];
      for (let item of row) {
        items.push(<div className="item">{item}</div>)
      }
      pictionary.push(<div className="row">{items}</div>)
    }
    return pictionary;
  }
    
    render() {
      return (
          <>
              <div className="container">
                {/* <div className="row">
                  <div className="item">A</div>
                  <div className="item">B</div>
                  <div className="item">C</div>
                  <div className="item">D</div>
                </div>
                <div className="row">
                  <div className="item">E</div>
                  <div className="item">F</div>
                  <div className="item">G</div>
                  <div className="item">H</div>
                </div>
                <div className="row">
                  <div className="item">E</div>
                  <div className="item">F</div>
                  <div className="item">G</div>
                  <div className="item">H</div>
                </div>
                <div className="row">
                  <div className="item">E</div>
                  <div className="item">F</div>
                  <div className="item">G</div>
                  <div className="item">H</div>
                </div> */}
                {this.createPictionary()}
              </div>
          </>
        )
    }
}