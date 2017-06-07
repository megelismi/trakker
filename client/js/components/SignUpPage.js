import React, { Component } from 'react';
import { connect } from 'react-redux';
import FacebookLogin from './FacebookLogin';
import * as async from '../actions/async';
import * as postRequests from '../actions/postRequests';
import * as postResults from '../actions/postResults';

class SignUpBox extends Component {

  componentWillMount() {
    this.props.dispatch(async.purge('userError', 'appHasUserError'));
  }

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
    }))
    .then(() => {
      if (this.props.currentUser) {
        this.props.history.push('/flights');
      }
    });
  }

  render() {
    return (
      <div className="app-content-outer-wrapper">
        <div className="sign-up-content-container app-content-container">
          <h2 className="app-content-header">Sign Up</h2>
          <FacebookLogin history={this.props.history} />
          <p className="email-option">or sign up with email</p>
          <form className="sign-up-form" onSubmit={this.sendSignUpInfo.bind(this)}>
            <input
              className="app-input"
              type="text"
              name="firstname"
              placeholder="First name"
              ref={element => {
                this.firstName = element;
                return this.firstName;
              }}
            />
            <input
              className="app-input"
              type="text"
              name="lastname"
              placeholder="Last name"
              ref={element => {
                this.lastName = element;
                return this.lastName;
              }}
            />
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
              name="password"
              placeholder="Password"
              ref={element => {
                this.password = element;
                return this.password;
              }}
            />
            <input
              className="app-input"
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              ref={element => {
                this.confirmedPassword = element;
                return this.confirmedPassword;
              }}
            />
            <input className="submit-button" type="submit" value="Sign Up" />
          </form>
           <div className="input-req">
            Passwords must contain 6 characters, including 1 number and 1 symbol.
          </div>
          <span className="user-error">{this.props.appHasUserError ? this.props.userError : null}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  appHasUserError: state.appHasUserError,
  userError: state.userError
});

export default connect(mapStateToProps)(SignUpBox);
