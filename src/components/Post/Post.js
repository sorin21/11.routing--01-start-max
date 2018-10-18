import React from 'react';
// use it to have router props here too
import {withRouter} from 'react-router-dom';

import './Post.css';

const post = (props) => {
  console.log(props)
  return(
  <article className="Post" onClick={props.clicked}>
    <h1>{props.title}</h1>
    <div className="Info">
      <div className="Author">{props.author}</div>
    </div>
  </article>
)};

export default withRouter(post);