import React from "react";
import Blog from '../Blog/Blog';
import Custom from '../Custom/Custom';
import Subscribers from '../Subscribers/Subscribers';

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
          <ul className="main-nav">
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

export default NavContainer;
