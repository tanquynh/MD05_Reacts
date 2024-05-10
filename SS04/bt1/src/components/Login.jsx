import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props); // Đúng là super(props) chứ không phải supper(props)
        this.state = {
            email: "",
            password: "",
            error: {
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
        const { email, password } = this.state;
        const error = {};
        if (!email.trim()) {
            error.email = 'Email không được để trống';
        }
        if (!password.trim()) {
            error.password = 'Mật khẩu không được để trống';
        }
        if (Object.keys(error).length === 0) {
            this.props.handleLogin(email, password);
        } else {
            this.setState({ error });
        }
    };

    render() {
        const { email, password, error } = this.state;
        return (
            <div className='container-register'>
                <h1>Đăng nhập</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='input'>
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            value={email}
                            placeholder='Nhập email'
                            onChange={this.handleChange}
                        />
                        {error.email && <p className="error">{error.email}</p>}
                    </div>
                    <div className='input'>
                        <label>Mật khẩu :</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            placeholder='Nhập mật khẩu'
                            onChange={this.handleChange}
                        />
                        {error.password && <p className="error">{error.password}</p>}
                    </div>
                    <button type='submit'>Đăng nhập</button>
                </form>
            </div>
        );
    }
}
