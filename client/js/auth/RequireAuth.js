import React from 'react';
import { connect } from 'react-redux';
import  Login  from '../components/Login';
// import { Redirect } from 'react-router';
import store from '../store';
import { push } from 'react-router-redux';
// import Cookies from 'js-cookie';

export default function (Component) {
  class RequiresAuth extends React.Component {

    componentDidMount() {
      if (!this.props.currentUser) {
        console.log('no user, rerouting');
      }
    }

    render() {
      if (this.props.currentUser) {
        return <Component {...this.props} />;
      }
        return <Login />;
    }
  }

  const mapStateToProps = state => ({
    currentUser: state.currentUser
  });

  return connect(mapStateToProps)(RequiresAuth);
}
