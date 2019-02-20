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
          url="https://www.metabase.com/"
        />
         <ReactTinyLink
          cardSize="small"
          showGraphic={false}
          maxLine={3}
          minLine={1}
          url="https://www.w3schools.com/css/tryit.asp?filename=tryresponsive_mobilefirst"
        />
        <ReactTinyLink
          cardSize="large"
          maxLine={3}
          minLine={1}
          showGraphic={true}
          url="https://www.metabase.com/"
        />
      </React.Fragment>
    );
  }
}

export default App;
