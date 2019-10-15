import React from 'react';
import "./Game.scss";

export default class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="game">
                <div className="gameName">{this.props.name}</div>
                <div className="pic-and-text">
                    <img src={this.props.image_url} alt={this.props.name}/>
                    <div className="description">{this.props.description}</div>
                </div>
                <div className="rating-and-release">
                    <div className="rating">Rating: {this.props.rating}</div>
                    <div className="release">Released: {this.props.released_at}</div>
                </div>
                
            </div>
        );
    }
}