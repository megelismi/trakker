import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignUpBox from './SignUpBox';

class HomePage extends Component {

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
