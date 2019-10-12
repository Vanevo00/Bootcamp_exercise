import React from 'react';

export default class Exercise2 extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul className="basic-ul">
                {
                    this.props.data.map(item => (
                        <li>
                            { item }
                        </li>
                    ))
                }
            </ul>
        );
    }
}