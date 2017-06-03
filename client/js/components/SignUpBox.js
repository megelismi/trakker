import React, { Component } from 'react';
import FacebookProvider, { Login } from 'react-facebook';
import { connect } from 'react-redux';
import * as postRequests from '../actions/postRequests';
import * as postResults from '../actions/postResults';

class SignUpBox extends Component {

  handleFbResponse(user) {
    this.props.dispatch(postRequests.fbLogin(user));
  }

  handleFbError(error) {
    this.props.dispatch(postResults.fbLoginError(error));
  }

  sendSignUpInfo(e) {
    e.preventDefault();
    const firstName = this.firstName.value.trim();
    const lastName = this.lastName.value.trim();
    this.props.dispatch(postRequests.appSignUp({
      name: `${firstName} ${lastName}`,
      email: this.email.value.trim(),
      password: this.password.value.trim(),
      confirmedPassword: this.confirmedPassword.value.trim()
    }));
  }

  render() {
    return (
      <div className="sign-up-form-container">
        <FacebookProvider appId="1382077371899696">
          <Login
            scope="email"
            onResponse={this.handleFbResponse.bind(this)}
            onError={this.handleFbError.bind(this)}
          >
          <span>Login via Facebook</span>
          </Login>
        </FacebookProvider>
        <form className="signup-form" onSubmit={this.sendSignUpInfo.bind(this)}>
          <input
            className="sign-in-up-modal-input"
            type="text"
            name="firstname"
            placeholder="First name"
            ref={element => {
              this.firstName = element;
              return this.firstName;
            }}
          />
          <input
            className="sign-in-up-modal-input"
            type="text"
            name="lastname"
            placeholder="Last name"
            ref={element => {
              this.lastName = element;
              return this.lastName;
            }}
          />
          <input
            className="sign-in-up-modal-input"
            type="text"
            name="email"
            placeholder="Email"
            ref={element => {
              this.email = element;
              return this.email;
            }}
          />
          <input
            className="sign-in-up-modal-input"
            type="password"
            name="password"
            placeholder="Password"
            ref={element => {
              this.password = element;
              return this.password;
            }}
          />
          <input
            className="sign-in-up-modal-input"
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            ref={element => {
              this.confirmedPassword = element;
              return this.confirmedPassword;
            }}
          />
          <input className="accent-button" type="submit" value="Sign Up" />
        </form>
      </div>
    );
  }
}

export default connect()(SignUpBox);
