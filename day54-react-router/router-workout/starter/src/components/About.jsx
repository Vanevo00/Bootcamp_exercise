import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const About = props => {

  return(
    <Router history={history}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={`${match.url}/pes`}>Pes</Link>
            </li>
            <li>
              <Link to={`${match.url}/dvapsi`}>Dva Psi</Link>
            </li>
            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/users" component={Users}/>
          <Route path="/about" component={About}/>
        </Switch>
      </div>
    </Router>
  )
}

export default About