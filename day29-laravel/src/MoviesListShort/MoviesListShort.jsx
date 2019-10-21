import React from 'react';

export default class MoviesListShort extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            loaded: false,
            data: []
        };

        this.url = 'http://www.laravel.test:8081/movies/shortList';
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        if (this.url) {
            this.setState({ 
                loading: true,
                loaded: false,
                data: []
            })

            fetch(this.url)
                .then(response => response.json())
                .then(data => {
                    this.setState({ 
                        loaded: true,
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
            <div className="message">
                <div className="loader"><div></div><div></div><div></div><div></div></div>
                Loading
            </div>
        )
        if (!this.state.loading && this.state.loaded) {
            content = (
                <>
                    <ul>
                    {this.state.data.map(movie => (
                        <li key={movie.name}>
                            {movie.name}                            
                            <div className="rating">{movie.rating.toFixed(1)}</div>
                        </li>
                    ))}
                    </ul>
                </>
                    )
                    
                        {/* <li>
                            {this.state.data[0].name}                            
                            <div className="rating">{this.state.data[0].rating}</div>
                        </li>
                        <li>
                            The Godfather                            
                            <div className="rating">9.2</div>
                        </li>
                        <li>
                            The Godfather II                            
                            <div className="rating">9.0</div>
                        </li>
                        <li>
                            Dark Knight                            
                            <div className="rating">8.9</div>
                        </li>
                        <li>
                            12 angry men                            
                            <div className="rating">8.9</div>
                        </li>
                        <li>
                            Schindler's list                            
                            <div className="rating">8.9</div>
                        </li>
                        <li>
                            Pulp fiction                            
                            <div className="rating">8.9</div>
                        </li>
                        <li>
                            Lord of the Rings: Return of the King                            
                            <div className="rating">8.9</div>
                        </li>
                        <li>
                            The good, the bad and the ugly                            
                            <div className="rating">8.9</div>
                        </li>
                        <li>
                            Fight club                            
                            <div className="rating">8.8</div>
                        </li> */}
        }
        
        return (
            <section className="top-rated">

                <h2>Top rated movies & shows</h2>

                { content }

            </section>
        );
    }
}