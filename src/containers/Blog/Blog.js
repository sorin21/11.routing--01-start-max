import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
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
const NewPost = LazyImport(() => import('../../components/NewPost/NewPost'))

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/new-post">New Post</Link></li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
      </div>
    );
  }
}

export default Blog;