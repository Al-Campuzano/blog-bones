import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function NavContainer() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/custom">Custom Blog Page</Link>
            </li>
            <li>
              <Link to="/subscribers">Subscribers</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/custom">
            <Custom />
          </Route>
          <Route path="/subscribers">
            <Subscribers />
          </Route>
          <Route path="/">
            <Blog />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Custom() {
  return <h2>Custom Blog Page</h2>
}

function Subscribers() {
  return <h2>Subscribers Page</h2>
}

function Blog() {
  return <h2>Blog Page</h2>
}

export default NavContainer;
