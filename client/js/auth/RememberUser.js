
import React from 'react';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import * as getRequests from '../actions/getRequests.js';

export default function (Component) {
  class RememberUser extends React.Component {
    componentDidMount() {
      const accessToken = Cookies.get('savori_token');

      if (!this.props.currentUser && accessToken) {
        this.props.dispatch(getRequests.findUserFromCookie(accessToken));
      }
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    currentUser: state.currentUser
  });

  return connect(mapStateToProps)(RememberUser);
}
