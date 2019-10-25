import React from "react";
import MovieFavorite from "./MovieFavorite.jsx";

export default class MovieReview extends React.Component {
  constructor(props) {
    super(props);

    this.movie_id = 488;

    this.state = {
      movie_data: null,
      text: "",
    }
  }

  componentDidMount = () => {
    fetch(`http://www.laravel.test:8081/api/movie?id=${this.movie_id}`)
    .then(response => response.json())
    .then(json_data => {
      this.setState({
        movie_data: json_data 
      })
      
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // send post data to an endpoint /api/movies/add_review
    fetch("http://www.laravel.test:8081/api/movies/add_review", {
      method: "POST",
      headers : {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        "movie_id": 420,
        "user_id": 1,
        "text": this.state.text,
        "rating": 8
      })
    })
  }

  handleTextChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }
  
  
  render () {
    let movie = "Loading..";

    if (this.state.movie_data !== null) {
      movie = (
        <div className="movie">
          <h2>{this.state.movie_data.name}</h2>
          <img src={this.state.movie_data.poster_url} alt={this.state.movie_data.name}/>
          <p>rating: {this.state.movie_data.rating}</p>
        </div>
      )
    }

    return (
     <>
     {movie} 
     <form action="" method="post" onSubmit={ this.handleSubmit }>
       <input type="text" name="text" value={this.state.text} onChange={ this.handleTextChange }/>
       <input type="submit" value="Submit"/>
     </form> 
     <MovieFavorite
      movie_id={this.movie_id}
     />
     </>
    )
  }
}