import React from 'react';
import Userinfo from './Userinfo.jsx';
import Navigation from './Navigation.jsx';

export default class Header extends React.Component {
  render() {
    return (
        <header>
            <img src="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture.png" alt="Aperture science" className="logo"/>

<Userinfo/>

<Navigation/>
        </header>
    );
  }
}