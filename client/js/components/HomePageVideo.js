import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class HomePageVideo extends Component {

  render() {

    return (
      <div className="homepage-container">
        <div className="fullscreen-bg">
          <div className="intro-container">
            <h2>Welcome to Flight Tracker</h2>
            <button className="homepage-button"><Link to="/login">LOGIN</Link></button>
            <button className="homepage-button"><Link to="/signup">SIGN UP</Link></button>
          </div>
          <video loop muted autoPlay poster="./assets/10K_Feet.jpg" className="fullscreen_bg__video">
            <source src="./assets/10K_Feet.webm" type="video/webm" />
            <source src="./assets/10K_Feet.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});


export default connect(mapStateToProps)(HomePageVideo);
