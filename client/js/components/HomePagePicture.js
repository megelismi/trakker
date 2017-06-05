import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePagePicture extends Component {

  render() {
    return (
      <div className="homepage-container">
        <div className="intro-container">
          <h2>Welcome to Flight Tracker</h2>
          <button className="homepage-button"><Link to="/login">Login</Link></button>
          <button className="homepage-button"><Link to="/signup">Sign Up</Link></button>
        </div>
      </div>
    );
  }
}

export default HomePagePicture;
