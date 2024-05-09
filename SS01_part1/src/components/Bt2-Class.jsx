import React, { Component } from 'react'

export default class Bt2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number1 : 0,
            number2 : 0,
            sum : 0
        };
    }
    handleChange = (e) => {
        this.setState({[e.target.name] : parseInt(e.target.value) || 0})
    }
    handleSum = () => {
        const sum = this.state.number1 + this.state.number2;
        this.setState({sum});
    }
  render() {

    return (
      <div>
        <h2>Caculator</h2>
        <label >Number 1 : <input type='number' name = "number1" value={this.state.number1} onChange={this.handleChange}></input></label><br/>
        <label >Number 2 : <input type='number' name = "number2" value={this.state.number2} onChange={this.handleChange}></input></label><br/>
        <label ><button onClick={this.handleSum}>Caculator Sum</button></label><br/>
        <label >Sum : <input type='text' readOnly value={this.state.sum}></input></label>
      </div>
    )
  }
}
