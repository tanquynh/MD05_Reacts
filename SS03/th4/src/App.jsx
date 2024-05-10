import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          count: 0
      };
      this.handleClick = this.handleClick.bind(this); 
  }

  handleClick() {
      this.setState({ count: this.state.count + 1 });
  }

  render() {
      return (
          <>
          <h2>So lan bam cua ban {this.state.count}</h2>
             <button onClick={this.handleClick}>Click me</button><br/>
          

          </>
      );
  }
}

