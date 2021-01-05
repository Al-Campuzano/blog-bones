import React from "react";
import Blog from '../Blog/Blog';
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
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
              <Link to="/polaris">Polaris Blog Page</Link>
            </li>
            <li>
              <Link to="/subscribers">Subscribers</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/new">New Post</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/polaris">
            <Custom />
          </Route>
          <Route path="/subscribers">
            <Subscribers />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/new">
            <NewPost />
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
