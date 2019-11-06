import React from 'react';



export default class Header extends React.Component {
  render() {
    return (
        <div className="user">
        <span>chell@aperture.sc</span><br/>
        <a href="#">logout</a>
    </div>
    );
  }
}