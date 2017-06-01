import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/flights">Flights Page</Link></li>
        </ul>
      </div>
    );
  }
}

export default Home;

