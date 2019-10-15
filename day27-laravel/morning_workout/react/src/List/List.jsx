import React from 'react';
import Game from '../Game/Game.jsx';

export default class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: []
        };
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        if (this.props.url) {
            this.setState({ 
                loading: true,
                data: []
            })

            fetch(this.props.url)
                .then(response => response.json())
                .then(data => {
                    this.setState({ 
                        data: data
                    })
                })
                .finally(this.setState({
                    loading: false
                }));
        }
    }

    render() {

        let content = (
            <div className="message">Loading...</div>
        )
        if (!this.state.loading) {
            content = (
                <>
                    <h1>List of games</h1>
                    {
                        this.state.data.map(item => ( 
                            <Game key={ item.name } { ...item } />
                        ))
                    }
                </>
            )
        }
        
        return (
            <div className="games">
                { content }
            </div>
        );
    }
}