import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-bootstrap-date-picker';
import * as getRequests from '../actions/getRequests';
// import * as handlers from './handlers/handlers';

class FlightsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flightDate: new Date().toISOString(),
      flightNumberError: null
    };
  }

  dateChange(date) {
    this.setState({
      flightDate: date
    });
  }

  sendFlightInfo(e) {
    e.preventDefault();
    const flightDate = this.state.flightDate.slice(0, 10);
    if (this.flightNumber.value === '') {
      this.setState({
        flightNumberError: 'Please enter a flight number.'
      });
    } else {
      this.setState({
        flightNumberError: null
      });
      this.props.dispatch(getRequests.getFlightDetails(this.flightNumber.value.trim(), flightDate.trim()));
    }
  }

  render() {
    let flightDetails;
    if (this.props.flightDetails) {
      flightDetails = (
        <p>
          {
            `Flight number ${this.flightNumber.value} is set to arrive at
            ${this.props.flightDetails.airport} on ${this.props.flightDetails.date}.`
          }
        </p>
      );
    } else {
      flightDetails = <div />;
    }

    //const firstName = handlers.getFirstName(this.props.currentUser.name);

    return (
      <div className="flights-page-container">
        <div className="app-content-container">
        <h2 className="app-content-header">Track Your Flight</h2>
         <form className="flight-info-form" onSubmit={this.sendFlightInfo.bind(this)}>
            <input
              className="app-input"
              type="text"
              name="flight_number"
              placeholder="Flight number"
              ref={element => {
                this.flightNumber = element;
                return this.flightNumber;
              }}
            />
          <DatePicker
            value={this.state.flightDate}
            onChange={this.dateChange.bind(this)}
          />
          <input className="submit-button" type="submit" value="Get Flight Details" />
          </form>
          <div className="input-req">
            Flight numbers must include airline code (i.e., AA3453).
          </div>
          <span className="auth-error">{this.state.flightNumberError ? this.state.flightNumberError : null}</span>
          {flightDetails}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  flightDetails: state.flightDetails
});

//<p className="welcome-name">Welcome, {firstName}!</p>
export default connect(mapStateToProps)(FlightsPage);
