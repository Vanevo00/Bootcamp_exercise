import React from 'react';
import Message from '../message/Message.jsx';

export default class Exercise extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            content_data: null
        };

        let Content = this.props.content;

    }

    componentDidMount() {
        this.reload();
    }

    reload() {
        if (this.props.url) {
            this.setState({ 
                loading: true,
                content_data: null
            })

            fetch(this.props.url)
                .then(response => response.text())
                .then(text => {
                    try {
                        const data = JSON.parse(text);
                        this.setState({ 
                            content_data: data,
                            loading: false
                        })
                    } catch(err) {
                        this.setState({ 
                            content_data: text,
                            loading: false 
                        })
                    }
                });
        }
    }

    render() {
        let ContentComponent = this.props.content;

        let content = '';
        if (!this.props.url) {
            content = (
                <Message
                    type='error'
                    content={ 'URL not set. Please set URL for \''+this.props.id+'\'' }
                />
            )
        } else {
            if (this.state.content_data) {
                content = (
                    <ContentComponent
                        data={ this.state.content_data }
                    />
                )
            } else {
                content = (
                    <Message
                        type='info'
                        content={ 'Loading...' }
                    />
                )
            }
        }
        
        return (
            <div className={ 'exercise'+(this.state.loading ? ' exercise--loading' : '') }>
                { content }
            </div>
        );
    }
}