import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  name = "Shivank";
  render() {
    return (
      <div>
        <h1>Hello myself {this.name}. This is my first class based component.</h1>
      </div>
    )
  }
}

