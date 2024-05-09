import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <label>Number 1: <input type="number" name='number1' value={this.props.number.number1} onChange={this.props.handleChange} /></label><br/>
        <label>Number 2: <input type="number" name='number2' value={this.props.number.number2} onChange={this.props.handleChange} /></label>
      </div>
    );
  }
}
