import React, { Component } from 'react';
import { connect } from 'react-redux';
import FacebookProvider, { Login } from 'react-facebook';

class Home extends Component {
  handleResponse(data) {
    console.log(data);
  }

  handleError(error) {
    this.setState({ error });
  }

  render() {
    return (
      <FacebookProvider appId="1382077371899696">
        <Login
          scope="email"
          onResponse={this.handleResponse}
          onError={this.handleError}
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
