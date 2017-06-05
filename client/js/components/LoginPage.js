import React, { Component } from 'react';
import { connect } from 'react-redux';
import FacebookLogin from './FacebookLogin';
import * as postRequests from '../actions/postRequests';

class LoginPage extends Component {

  sendLoginInfo(e) {
    e.preventDefault();
    this.props.dispatch(postRequests.appLogin(
      { email: this.email.value, password: this.password.value }
    )).then(() => {
      this.props.history.push('/flights');
    });
  }

  render() {
    return (
      <div className="app-content-container">
        <h2 className="app-content-header">Welcome Back!</h2>
        <FacebookLogin history={this.props.history} />
        <p className="email-option">or login with email</p>
        <form className="login-form" onSubmit={this.sendLoginInfo.bind(this)}>
          <input
            className="app-input"
            type="text"
            name="email"
            placeholder="Email"
            ref={element => {
              this.email = element;
              return this.email;
            }}
          />
          <input
            className="app-input"
            type="password"
            name="lastname"
            placeholder="Password"
            ref={element => {
              this.password = element;
              return this.password;
            }}
          />
          <input
            className="submit-button"
            type="submit"
            value="Login"
          />
        </form>
        <span className="auth-error">{this.props.appHasAuthError ? this.props.authError : null}</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  appHasAuthError: state.appHasAuthError,
  authError: state.authError
});

export default connect(mapStateToProps)(LoginPage);
