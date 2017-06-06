import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {

  render() {
    return (
      <div className="homepage-container">
        <div className="intro-container">
          <h2>Welcome to Flight Trakker</h2>
        </div>
      </div>
    );
  }
}

export default HomePage;
