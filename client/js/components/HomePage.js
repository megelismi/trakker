import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignUpBox from './SignUpBox';

class HomePage extends Component {


  //should I put the appId in an env variable?
  render() {
    return (
      <SignUpBox />
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(HomePage);
