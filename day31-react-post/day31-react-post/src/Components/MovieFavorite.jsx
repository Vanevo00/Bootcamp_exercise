import React from 'react';

/**
 * 1. App component renders MovieReview component
 * 2. MovieReview renders FavoriteMovie component
 * 3. As FavoriteMovie component is being mounted to the page, it runs an AJAX request with fetch
 * 4. While the request is on its way the component goes on rendering itself.
 * 5. In render() it now has the DEFAULT value of its state.
 * 6. this.state.favorite === null so render displays "Loading..." on the button
 * 
 * 7. response comes back
 * 8. we parse it as JSON
 * 9. we change the state with this.setState using the value that came in the response
 * 10. setState automatically triggers a re-render
 * 11. in render() we now have the updated value of this.state.favorite
 * 12. based on its value we either display 'Unfavorite this movie' or 'Favorite this movie' on the button
 * 13. THE END
 */
export default class MovieFavorite extends React.Component {
    constructor(props) {
        super(props);

        // initial state of this component
        this.state = {
            favorite: null
        };
    }

    componentDidMount = () => {
        fetch(`http://www.laravel.test:8081/api/movies/favorite?user_id=1&movie_id=${this.props.movie_id}`)
        .then(response => response.json())
        .then(json_data => {
            this.setState({
                favorite: json_data.favorite
            })
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://www.laravel.test:8081/api/movies/favorite/toggle', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                "movie_id": this.props.movie_id,
                "user_id": 1
            })
        })
        .then(response => response.json())
        .then(json_data => {
            this.setState({
                favorite: json_data.data.favorite
            })
        })
    }

    render() {

        // use this.state.favorite to prepare different HTML output
        // based on its value
        let label = 'Loading...';
        if (this.state.favorite === true) {
            label = 'Unfavorite this movie';
        } else if (this.state.favorite === false) {
            label = 'Favorite this movie';
        }

        return (
            <>
                <h2>This is the MovieFavorite component! Favoriting movie { this.props.movie_id }</h2>

                <form action="" onSubmit={ this.handleSubmit }>
                    <button>{ label }</button>
                </form>
            </>
        )
    }

}