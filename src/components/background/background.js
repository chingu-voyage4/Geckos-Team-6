import React, { Component } from "react";
import './background.css'

export default class Background extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      background: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg'
    }
  }

  render() {

    return (
      <div>
      <img src={this.state.background} className="backgroundFull"/>
      </div>
    );
  }
}
