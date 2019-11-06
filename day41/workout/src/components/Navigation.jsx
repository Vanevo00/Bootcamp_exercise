import React from 'react';


export default class Navigation extends React.Component {
  render() {
    return (
        <nav>
            <a href="#">Home</a>
            <a href="#" className="current">Products</a>
            <a href="#">Stores</a>
            <a href="#">Customers</a>
        </nav>

    );
  }
}