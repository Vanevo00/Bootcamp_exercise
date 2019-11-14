import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import history from "history";
import Home from "./home.jsx";
import Users from "./users.jsx";
import About from "./about.jsx";


const App = props => {

  console.log(history);
  
  
  return (
    <Router history={history}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/users" component={Users}/>
          <Route path="/about" component={About}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    </Router>
  ) 
}

export default App;