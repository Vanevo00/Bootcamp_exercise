import React from 'react';

import './exercise3.scss';

export default class Exercise3 extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul className="movies-with-ratings">
                {
                    this.props.data.map(item => (
                        <li>
                            { item.name }

                            <div className="rating">{ item.rating }</div>
                        </li>
                    ))
                }
            </ul>
        );
    }
}