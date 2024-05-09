import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './conponets/Button'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    
        color : this.generateColor(),
        background : this.generateColor()
    
    }
  }
  generateColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  handleCLick() {
    this.setState({
        color : this.generateColor(),
        background : this.generateColor(),
    })
  }
    render() {
      return (
        <div>
          <Button text ="Click Me" color={this.state.color}  background={this.state.background} onClick={this.state.handleCLick}/>
        </div>
      )
    }
}


