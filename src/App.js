import React, { Component } from 'react';


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
          url="https://www.youtube.com/watch?v=plEcjL3XZz8"
        />
         
      </React.Fragment>
    );
  }
}

export default App;
