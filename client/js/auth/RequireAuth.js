import React from 'react';
import { connect } from 'react-redux';
import history from '../history';
import { Link } from 'react-router-dom';
// import Cookies from 'js-cookie';

export default function (Component) {
  class RequiresAuth extends React.Component {

    render() {
      if (this.props.currentUser) {
        return <Component {...this.props} />;
      }
      return (
        <div>
          I'm sorry you must be logged in to see your flights.
          Please <Link to="/login">login</Link>
        </div>
      );
    }
  }

  const mapStateToProps = state => ({
    currentUser: state.currentUser
  });

  return connect(mapStateToProps)(RequiresAuth);
}
