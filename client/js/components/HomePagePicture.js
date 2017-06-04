import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class HomePagePicture extends Component {

  render() {



    return (
      <div className="homepage-container">
        <div className="intro-container">
          <h2>Welcome to Flight Tracker</h2>
          <button className="homepage-button"><Link to="/login">LOGIN</Link></button>
          <button className="homepage-button"><Link to="/signup">SIGN UP</Link></button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});


export default connect(mapStateToProps)(HomePagePicture);
