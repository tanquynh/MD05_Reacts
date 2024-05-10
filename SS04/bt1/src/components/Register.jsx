import React, { Component } from 'react';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      email: "",
      password: "",
      error: {
        code: "",
        email: "",
        password: ""
      }
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { code, email, password } = this.state;
    const error = {};
    if (!code.trim()) {
      error.code = 'Mã không được để trống';
    } 
    if (!email.trim()) {
      error.email = 'Email không được để trống';
    }
    if (!password.trim()) {
      error.password = 'Mật khẩu không được để trống';
    } 
    if (Object.keys(error).length === 0) {
      this.props.handleSubmit(this.state);
      this.setState({
        code: '',
        email: '',
        password: '',
        error: {
          code: '',
          email: '',
          password: ''
        }
      });
    } else {
      this.setState({ error });
    }
  };

  render() {
    const { code, email, password, error } = this.state;
    return (
      <div className='container-register'>
        <h1>Đăng ký</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='input'>
            <label>Code</label>
            <input 
              type="text"
              name="code"
              value={code}
              placeholder='Enter Code'
              onChange={this.handleChange}
            />
            {error.code && <p className="error">{error.code}</p>}
          </div>
          <div className='input'>
            <label>Email</label>
            <input 
              type="text"
              name="email"
              value={email}
              placeholder='Enter email'
              onChange={this.handleChange}
            />
            {error.email && <p className="error">{error.email}</p>}
          </div>
          <div className='input'>
            <label>Password :</label>
            <input 
              type="text"
              name="password"
              value={password}
              placeholder='Enter password'
              onChange={this.handleChange}
            />
            {error.password && <p className="error">{error.password}</p>}
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}
