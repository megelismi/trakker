import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';


export default function (Component) {
  class RequiresAuth extends React.Component {

    componentDidMount() {
      if (!this.props.currentUser) {
        <Redirect to='/login' />;
      }
    }

    render() {
      if (this.props.currentUser) {
        return <Component {...this.props} />;
      }
        return <div />;
    }
  }

  const mapStateToProps = state => ({
    currentUser: state.currentUser
  });

  return connect(mapStateToProps)(RequiresAuth);
};
