import React, { Component } from 'react';
import { connect } from 'react-redux';
import BackgroundVideo from 'react-background-video-player';

class HomePage extends Component {

  render() {

    return (
      <div className="homepage-container">
        <BackgroundVideo className="homepage-video" src='./assets/10K_Feet.mp4' containerWidth={100} containerHeight={100} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(HomePage);
