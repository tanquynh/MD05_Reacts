import React, { Component } from 'react';

import './App.css';

export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          value: 0
      };
      this.handleClick = this.handleClick.bind(this); 
  }

  handleClick() {
      this.setState({ value: this.state.value + 1 });
  }

  render() {
      return (
          <>
             <button onClick={this.handleClick}>Click me</button><br/>
             <p>{this.state.value}</p>

          </>
      );
  }
}
