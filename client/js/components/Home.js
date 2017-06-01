import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Flights from './Flights';

class Home extends Component {
  render() {
    return (
      <div>
        {this.props.currentUser ? <Flights /> : <Login />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(Home);

