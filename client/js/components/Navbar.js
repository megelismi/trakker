import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import * as postRequests from '../actions/postRequests';

class NavbarComponent extends Component {

  logout() {
    console.log('logout called');
    console.log('props', this.props);
    this.props.dispatch(postRequests.logOut(this.props.currentUser.accessToken))
    .then(() => {
      this.props.history.push('/');
    });
  }

  render() {
    let rightNavLinks;

    if (this.props.currentUser) {
      rightNavLinks = (
        <Nav pullRight>
          <NavItem eventKey={1} onClick={this.logout.bind(this)}>Logout</NavItem>
        </Nav>
      );
    } else {
      rightNavLinks = (
        <Nav pullRight>
          <NavItem eventKey={1}><Link to="/login">Login</Link></NavItem>
          <NavItem eventKey={2}><Link to="/signup">Sign Up</Link></NavItem>
        </Nav>
      );
    }
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>Flight Trakker</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {rightNavLinks}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(NavbarComponent);
