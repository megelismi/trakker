import React, { Component } from 'react';
import { connect } from 'react-redux';
import FacebookProvider, { Login } from 'react-facebook';
import * as postRequests from '../actions/postRequests';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleResponse(user) {
    console.log(user);
    this.props.dispatch(postRequests.login(user));
  }

  handleError(error) {
    console.log(error);
    this.setState({ error });
  }

  render() {
    return (
      <FacebookProvider appId="1382077371899696">
        <Login
          scope="email"
          onResponse={this.handleResponse.bind(this)}
          onError={this.handleError.bind(this)}
        >
          <span>Login via Facebook</span>
        </Login>
      </FacebookProvider>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(Home);
