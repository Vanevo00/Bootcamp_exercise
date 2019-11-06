import React from 'react';


export default class Search extends React.Component {
  render() {
    return (
        <nav className="filter">
        <label htmlFor="filter">Filter</label>
        <input type="text" name="filter" id="filter" placeholder="enter search term" onChange={this.handleChange}/>
    </nav>
    );
  }
}