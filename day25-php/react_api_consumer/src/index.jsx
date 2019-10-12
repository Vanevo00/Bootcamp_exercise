import React from 'react';
import ReactDOM from 'react-dom';
import Container from './container/Container.jsx';

import './index.scss';
import './index.html';

class App extends React.Component {
  render() {
    return (
      <>
        <Container />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
