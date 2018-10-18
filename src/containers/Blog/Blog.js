import React, { Component } from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import './Blog.css';

const LazyImport = (loader) => Loadable({
  loader,
  loading: ({error, pastDelay}) => {
    if(error) {
      console.error('react-loadable error!', error);
      return null;
    }
    // pastDelay will be true if real delay > 100ms
    return pastDelay && <h3>Loading...</h3>;
  },
  delay: 100
});

const Posts = LazyImport(() => import('../../components/Posts/Posts'))
const FullPost = LazyImport(() => import('../../components/FullPost/FullPost'))
const NewPost = LazyImport(() => import('../../components/NewPost/NewPost'))
const Search = LazyImport(() => import('../../components/HashSearch'))

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/new-post">New Post</NavLink></li>
              <li><NavLink to="/search">Search</NavLink></li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/search" component={Search} />
          <Route path="/new-post" component={NewPost} />
          <Route path="/posts/:id" exact component={FullPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;