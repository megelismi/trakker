import React, { Component } from 'react';
import { connect } from 'react-redux';
import FacebookProvider, { Login } from 'react-facebook';
import * as postRequests from '../actions/postRequests';
import * as postResults from '../actions/postResults';

class FacebookLogin extends Component {

  constructor() {
    super();
    this.state = {
      fbAppId: process.env.FB_APP_Id
    };
  }

  handleFbResponse(user) {
    this.props.dispatch(postRequests.fbLogin(user))
    .then(() => {
      this.props.history.push('/flights');
    });
  }

  handleFbError(error) {
    this.props.dispatch(postResults.fbLoginError(error));
  }

  render() {

    return (
      <FacebookProvider appId="1382077371899696">
        <Login
          scope="email"
          onResponse={this.handleFbResponse.bind(this)}
          onError={this.handleFbError.bind(this)}
        >
        <button className="facebook-login-button">
          Login with Facebook
        </button>
        </Login>
      </FacebookProvider>
    );
  }
}


export default connect()(FacebookLogin);
