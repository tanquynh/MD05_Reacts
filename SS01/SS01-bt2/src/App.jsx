import React, { Component } from 'react';
import Input from './components/Input';
import Caculators from './components/Caculators';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: { number1: 0, number2: 0 },
      sum: 0,
    };
  }

  handleChange = (e) => {
    this.setState({
      number: {
        ...this.state.number,
        [e.target.name]: parseInt(e.target.value) || 0
      }
    });
  };

  handleSum = () => {
    const sum = parseInt(this.state.number.number1) + parseInt(this.state.number.number2);
    this.setState({ sum });
  }; 

  render() {
    return (
      <>
        <h1>Calculator</h1>
        <Input number={this.state.number} handleChange={this.handleChange}/>
        <Caculators sum={this.state.sum} handleSum={this.handleSum}/>
      
      </>
    );
  }
}

export default App;