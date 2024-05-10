import React, { Component } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loggedInUser: null,
      toogle : false,
    };
  }

  handleSubmit = (data) => {
    const { users } = this.state;
    const { code, email, password } = data;
    const newUser = {
      code: code,
      email: email,
      password: password
    };
    const foundUser = users.find(user => user.email === email && user.password === password)
    if (!foundUser) {
      this.setState({ loggedInUser: foundUser })
      alert('Đăng ký thành công!');
  
      this.setState({
        users: [...this.state.users, newUser]
      });
    } else {
      alert('Tài khoản đã tồn tại, mời nhập lại!');
    }
   
  };

  handleLogin = (email, password) => {
    const { users } = this.state;
    const foundUser = users.find(user => user.email === email && user.password === password)
    if (foundUser) {
      this.setState({ loggedInUser: foundUser })
      alert('Đăng nhập thành công!');
    } else {
      alert('Email hoặc mật khẩu không chính xác!');
    }
  };
  handleToggle = () => {
    this.setState(prevState => ({
      toogle : !prevState.toogle
    }))
  }
  render() {
    const {toogle} = this.state;
    return (
      <div>
        <button onClick={this.handleToggle}>{toogle ? "Đăng nhập" :"Đăng kí" }</button>
     
        {toogle ? <Register handleSubmit={this.handleSubmit} /> :   <Login handleLogin={this.handleLogin} />}
       
        <div>
          <h2>Danh sách người dùng đã đăng ký:</h2>
          <ul>
            {this.state.users.map((user, index) => (
              <li key={index}>
                Mã: {user.code}, Email: {user.email}, Password: {user.password}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
