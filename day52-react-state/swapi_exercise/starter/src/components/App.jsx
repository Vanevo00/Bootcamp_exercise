import React, { useState, useEffect } from 'react'

const App = () => {
  const [luke, setLuke] = useState();
  const [film, setFilm] = useState();

  useEffect(() => {
    fetch('https://swapi.co/api/people/1')
      .then(resp => resp.json())
      .then(resp => setLuke(resp))

      // console.log(luke);
  }, []);


  useEffect(() => {
    if(luke) {
      let [movie, movie2] = luke.films;
      fetch(movie2)
        .then(resp => resp.json())
        .then(resp => setFilm(resp))
    }

    console.log(film)
  }, [luke]);
  
    return (
      <>
        <h1>{luke ? luke.name : "Loading.."}</h1>
        <p>Films:</p>
        <p>{film ? film.title : "Loading.."}</p>
        
      </>
    );
  }

export default App;
