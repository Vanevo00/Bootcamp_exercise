import React from 'react';
import ReactDOM from 'react-dom';

import Contact from './contact/contact.jsx';
import './index.scss';
import './index.html';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        data: null,
    }
}

componentDidMount = () => {
    fetch('https://classes.codingbootcamp.cz/api/attendance/coding-bootcamp/autumn-2019/2019-11-05')
    .then(response => response.json())
    .then(json_data => {
        this.setState({
            data: json_data
        })
    })
}
  
  render() {
    
    
    let presence;

    this.state.data !== null ?
    presence = this.state.data.attendance.map((person) => <li key={person.id}>{person.name} ({person.from ? "present since " + new Date(person.from).getHours() : "not present"})</li>) :
    presence = "loading";

    return (
      <div>
        <ul>
          {presence}
        </ul>
      </div>
      
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
