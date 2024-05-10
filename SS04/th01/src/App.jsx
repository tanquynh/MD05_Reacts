import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {currentTime : new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  tick() {
    this.setState({
      currentTime:new Date()
    });
  }
  render() {
    return (
      <div>
          <h1>Thoi gian hien tai la {this.state.currentTime.toLocaleTimeString()}</h1>
        
      </div>
    )
  }
}
