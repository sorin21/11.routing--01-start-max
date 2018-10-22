import React, { Component } from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import Loadable from 'react-loadable';
import './Blog.css';
// import Posts from '../../components/Posts/Posts'
// import FullPost from '../../components/FullPost/FullPost';
// import NewPost from '../../components/NewPost/NewPost'
// import Search from '../../components/HashSearch'
// import asyncComponent from '../../hoc/asyncComponent'

// const AsyncNewPost = asyncComponent(() =>{
//   return import('../../components/NewPost/NewPost');
// });


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
// const FullPost = LazyImport(() => import('../../components/FullPost/FullPost'))
const NewPost = LazyImport(() => import('../../components/NewPost/NewPost'))
const Search = LazyImport(() => import('../../components/HashSearch'))

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink exact to="/posts">Home</NavLink></li>
              <li><NavLink to="/new-post">New Post</NavLink></li>
              <li><NavLink to="/search">Search</NavLink></li>
            </ul>
          </nav>
        </header>
        <Switch>
          {/* <Route path="/search" component={Search} /> */}
          <Route path="/" exact component={Posts} />
          <Route path="/new-post" component={NewPost} />
          <Route path="/search" component={Search} />
          <Route path="/posts" component={Posts} />
          {/* <Route path="/" component={Posts} /> */}
          {/* <Route path="/posts/:id" exact component={FullPost} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;