import React from 'react';
import Celebrity from '../Celebrity/Celebrity.jsx';

export default class Celebrities extends React.Component {
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
                    <h1>The highest-paid celebrities 2019</h1>
                    {
                        this.state.data.map(item => ( 
                            <Celebrity key={ item.name } { ...item } />
                        ))
                    }
                </>
            )
        }
        
        return (
            <div className="celebrities">
                { content }
            </div>
        );
    }
}