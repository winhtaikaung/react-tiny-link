import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactTinyLink from './ReactTinyLink';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ReactTinyLink
          cardSize="small"
          showGraphic={true}
          maxLine={3}
          minLine={1}
          url="https://en.wikipedia.org/wiki/Node.js"
        />
        <ReactTinyLink
          cardSize="large"
          maxLine={3}
          minLine={1}
          showGraphic={true}
          url="https://en.wikipedia.org/wiki/Node.js"
        />
      </React.Fragment>
    );
  }
}

export default App;
