import React from "react";

export default class MovieReview extends React.Component {
  constructor(props) {
    super(props);

    this.movie_id = 420;

    this.state = {
      nasa_data: null
    }
  }

  componentDidMount = () => {
    // fetch(`http://www.laravel.test:8081/api/movie?id=${this.movie_id}`)
    // .then(response => response.json())
    // .then(json_data => {
    //   this.setState({
    //     movie_data: json_data 
    //   })
      
        // })
    fetch("https://matchilling-tronald-dump-v1.p.rapidapi.com/quote/%7Bid%7D", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "matchilling-tronald-dump-v1.p.rapidapi.com",
        "x-rapidapi-key": "16fd8bbefamshaabc14a887b0173p13759djsn8007dfb13757",
        "accept": "application/hal+json"
      }
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
  }

  render () {
    console.log(this.state.nasa_data);
    return (
     <>
     <h1>pes</h1>
     </>
    )
  }
}