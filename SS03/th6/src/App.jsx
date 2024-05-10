import React, { Component } from 'react'; 
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      array: [],
      total: 0,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this); 
  }

  handleChangeInput(e) {
    
    this.setState({
      number: e.target.value, 
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  
    const number = parseInt(this.state.number);
   
    this.setState({
      array: [...this.state.array, number], 
      total: this.state.total + number, 
      number: "",
    });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type='number'
            value={this.state.number}
            onChange={this.handleChangeInput} />
          <button type="submit">Add</button>
          <span>Kết quả: </span>
        </form>
        <div style={{ color: "red" }}>
         
          {this.state.array.join("+") + "=" + this.state.total}
        </div>
      </>
    );
  }
}
