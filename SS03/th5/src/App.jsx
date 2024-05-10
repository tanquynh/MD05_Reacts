import React, { Component } from 'react'; 

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "" 
    };
  }

  handleChangeInputValue = (e) => {
    this.setState({
      textInput: e.target.value
    });
  }


  handleSubmitForm = (e) => {
    e.preventDefault(); 
    alert("Bạn vừa nhập: " + this.state.textInput);
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmitForm}>
          <input 
            type="text"
            value={this.state.textInput} 
            onChange={this.handleChangeInputValue} 
          />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
