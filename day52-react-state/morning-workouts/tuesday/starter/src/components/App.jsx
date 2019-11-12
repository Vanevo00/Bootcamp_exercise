import React, { Component } from "react";
import UserDetails from "./User-Panel.jsx";
import UserCard from "./User-Card.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        people: null,
        selectedCard : null
    };
  }

  callbackFunction = (childData) => {
		this.setState({selectedCard: childData})
	}

  componentDidMount() {
    fetch('https://nemadywgu6.execute-api.us-west-2.amazonaws.com/prod/')
      .then(resp => resp.json())
      .then(people => this.setState({ people: people }));
  }
  
  
  render() {
    console.log(this.state.selectedCard);

    let people = this.state.people ? 
    this.state.people.map((person, index) => (
      <UserCard 
        key={index}
        user={person}
        index={index}
        setSelectedUser={index === this.state.selectedCard}
        parentCallback={this.callbackFunction}
      />
    ))
    : "Loading..";

    console.log(people);
    
    return (
      <>
        {people}
      </>
    );
  }
}

export default App;
