import React, {useState, useEffect} from 'react';
import Nav from './Nav';
import Actor from './Actor';



 const App = () => {
    const [selectedActor, setSelectedAtor] = useState('22616');
    const [actorBasic, setActorBasic] = useState(null);
    const [actorRatings, setActorRatings] = useState(null);
    const [actorGenres, setActorGenres] = useState(null);

    const setActor = (answer) => {
      setSelectedAtor(answer)
    }

    useEffect(() => {
      // console.log("actorBasic",actorBasic);
      // console.log("selectedActor",selectedActor);
    });

    
    useEffect(() => {
      fetch(`https://classes.codingbootcamp.cz/assets/classes/workouts/actor-o-matic/actor/${selectedActor}`)
        .then(response => response.json())
        .then(response => setActorBasic(response))

      fetch(`https://classes.codingbootcamp.cz/assets/classes/workouts/actor-o-matic/actor/${selectedActor}/ratings`)
        .then(response => response.json())
        .then(response => setActorRatings(response))

      fetch(`https://classes.codingbootcamp.cz/assets/classes/workouts/actor-o-matic/actor/${selectedActor}/genres`)
        .then(response => response.json())
        .then(response => setActorGenres(response))
    }, [selectedActor]);


    
      return (
          <>
            <Nav
            setActor={setActor}
            />
            <Actor
            actorBasic={actorBasic}
            actorRatings={actorRatings}
            actorGenres={actorGenres}
            />
          </>
        )
}

export default App