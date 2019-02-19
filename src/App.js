import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactTinyLink from "./ReactTinyLink";

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <ReactTinyLink
        cardSize="small"
        maxLine={2}
        minLine={1}
        url="https://www.thetimes.co.uk/edition/news/us-and-germany-tariff-war-plunges-relations-to-new-low-lr9p80bnf"
      />
      <ReactTinyLink
        cardSize="large"
        maxLine={3}
        minLine={1}
        url="http://facebook.com"
      />
      </React.Fragment>
    );
  }
}

export default App;
