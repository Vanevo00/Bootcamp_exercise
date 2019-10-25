import React from "react";

export default class MovieFavorite extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favorite: null
    }
  }

  componentDidMount = () => {
    fetch(`http://www.laravel.test:8081/api/movies/favorite?user_id=1&movie_id=${this.props.movie_id}`)
    .then(response => response.json())
    .then(json_data => {
      this.setState({
        favorite: json_data.favorite 
      })
      
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // send post data to an endpoint /api/movies/favorite/toggle
    fetch("http://www.laravel.test:8081/api/movies/favorite/toggle", {
      method: "POST",
      headers : {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        "movie_id": this.props.movie_id,
        "user_id": 1
      })
      
    })
    .then(response => response.json())
    .then(json_data => {
      this.setState({
        favorite: json_data.data.favorite 
      })
    });
  }
  
  
  render() {
    let favorite = "loading..";
    if (this.state.favorite === false) {
      favorite = "no";
    }
    if (this.state.favorite === true) {
      favorite = "yes";
    }

    return (
      <>
        <div className="favorite">Favorite: {favorite}</div>
        <form action="" method="post" onSubmit={ this.handleSubmit }>
          <input type="submit" value="Submit"/>
        </form>
     </>
    )
  }
}