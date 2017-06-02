import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';

class Home extends Component {

  responseFacebook(response) {
    console.log(response);
  }

  render() {
    return (
      <div>
        <FacebookLogin
          appId="1807308099584234"
          autoLoad={true}
          size="small"
          fields="name,email,picture"
          scope="public_profile,user_friends,user_actions.books"
          callback={this.responseFacebook}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(Home);

