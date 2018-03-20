import React, { Component } from "react";
import Background from './background/background';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Background />
        <p>Our starting point ...</p>
      </div>
    );
  }
}
