import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import * as postRequests from '../actions/postRequests';

class NavbarComponent extends Component {

  logout() {
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
          <NavItem
            onClick={() => { this.props.history.push('/login'); }}
            eventKey={1}
          >Login</NavItem>
          <NavItem
            onClick={() => { this.props.history.push('/signup'); }}
            eventKey={2}
          >Sign Up</NavItem>
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
