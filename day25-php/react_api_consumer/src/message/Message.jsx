import React from 'react';

export default class Message extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className={ 'message '+this.props.type }>
                { this.props.content }
            </div>
        );
    }
}