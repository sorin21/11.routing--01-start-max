import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const myExternalProcessor = props => {
  const myHash = props.location.hash;
  let mySearchValue = '';
  const mySearch = new URLSearchParams(props.location.search);
  for (let myParam of mySearch.entries()) {
    mySearchValue = myParam[1];
  }
  return [myHash, mySearchValue];
}
const MyComponentPink = props => {
  const myPinkBgd = { padding: '6px 0', backgroundColor: '#fac' };
  return (
    <div style={myPinkBgd}>
      {myExternalProcessor(props)[0]}{' & '}
      {myExternalProcessor(props)[1]}
    </div>
  );
}
const MyComponentGreen = props => {
  const myPinkBgd = { padding: '6px 0', backgroundColor: '#5e9' };
  return (
    <div style={myPinkBgd}>
      {myExternalProcessor(props)[0]}{' & '}
      {myExternalProcessor(props)[1]}
    </div>
  );
}
const MyComponentBlue = props => {
  const myPinkBgd = { padding: '6px 0', backgroundColor: '#9bf' };
  return (
    <div style={myPinkBgd}>
      {myExternalProcessor(props)[0]}{' & '}
      {myExternalProcessor(props)[1]}
    </div>
  );
}
class App extends Component {
  render() {
    const myContainer = {
      maxWidth: '360px', margin: '10px auto', padding: '10px 0',
      backgroundColor: '#ddd', textAlign: 'center', border: '1px solid #000',
      fontSize: '16px', fontFamily: 'Helvetica', fontWeight: 'lighter'
    };
    const ulStyle = { width: '100%', margin: '0', padding: '0', listStyle: 'none', textAlign: 'center' };
    const liStyle = { display: 'inline-block', margin: '0 4px 10px' };
    return (
      <div style={myContainer}>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <Link
              to={{
                pathname: '/pink',
                hash: '#pink-hash',
                search: '?my-search=pink-color'
              }}
            >Pink
                        </Link>
          </li>
          <li style={liStyle}>
            <Link
              to={{
                pathname: '/green',
                hash: '#green-hash',
                search: '?my-search=green-color'
              }}
            >Green
                        </Link>
          </li>
          <li style={liStyle}>
            <Link
              to={{
                pathname: '/blue',
                hash: '#blue-hash',
                search: '?my-search=blue-color'
              }}
            >Blue
                        </Link>
          </li>
        </ul>
        <Switch>
          <Route path="/pink" component={MyComponentPink} />
          <Route path="/green" component={MyComponentGreen} />
          <Route path="/blue" component={MyComponentBlue} />
        </Switch>
      </div>
    );
  }
}
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));