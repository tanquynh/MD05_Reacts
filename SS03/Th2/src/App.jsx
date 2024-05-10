import React, { Component } from 'react';
import Button from './conponets/Button';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.generateColor(),
      background: this.generateColor()
    };
    this.handleClick = this.handleClick.bind(this); 
  }

  generateColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  handleClick() {
    this.setState({
      color: this.generateColor(),
      background: this.generateColor(),
    });
  }

  render() {
    return (
      <div>
        <Button text="Click Me" color={this.state.color} background={this.state.background} onClick={this.handleClick} />
      </div>
    );
  }
}
