import React, { Component } from 'react';
import { connect } from 'react-redux';
import FacebookLogin from './FacebookLogin';
import * as postRequests from '../actions/postRequests';

class LoginBox extends Component {

  sendSignInInfo(e) {
    e.preventDefault();
    this.props.dispatch(postRequests.appLogin(
      { email: this.email.value, password: this.password.value }
    ));
  }

  render() {
    return (
      <div className="login-container">
        <FacebookLogin />
        <form className="signin-form" onSubmit={this.sendSignInInfo.bind(this)}>
          <input
            className="sign-in-up-input"
            type="text"
            name="email"
            placeholder="Email"
            ref={element => {
              this.email = element;
              return this.email;
            }}
          />
          <input
            className="sign-in-up-input"
            type="password"
            name="lastname"
            placeholder="Password"
            ref={element => {
              this.password = element;
              return this.password;
            }}
          />
          <input
            className="accent-button"
            type="submit"
            value="Sign In"
          />
        </form>
      </div>
    );
  }
}

export default connect()(LoginBox);
