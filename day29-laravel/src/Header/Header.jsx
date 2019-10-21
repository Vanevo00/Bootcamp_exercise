import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <header>

                <h1>The<br />Movie<br />Database</h1>
                
                <nav>

                    <a href="#">Home</a>

                    <a href="#">List of movies</a>

                    <a href="#">Movie of the week</a>

                </nav>

            </header>
        );
    }
}