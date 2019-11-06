import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Search from './Search.jsx';
import Productlist from './Productlist.jsx';

export default class App extends React.Component {
  render() {
    return (
    <div id="page">

    <Header/>

        <div id="main">
        <Search/>

            <div className="content">
                <h1>Products</h1>

            <Productlist/>

            </div>

        </div>

        <Footer/>

    </div>
    );
  }
}