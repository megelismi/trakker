import React from 'react';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import * as getRequests from '../actions/getRequests';

export default function (Component) {
  class RequiresAuth extends React.Component {

    componentDidMount() {
      const accessToken = Cookies.get('savori_token');
      if (!this.props.currentUser && accessToken) {
        this.props.dispatch(getRequests.findUserFromCookie(accessToken));
      }
    }

    render() {
      if (this.props.currentUser) {
        return <Component {...this.props} />;
      }
      return (
        <div />
      );
    }
  }

  const mapStateToProps = state => ({
    currentUser: state.currentUser
  });

  return connect(mapStateToProps)(RequiresAuth);
}
