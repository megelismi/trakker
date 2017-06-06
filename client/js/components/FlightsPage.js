import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-bootstrap-date-picker';
import * as getRequests from '../actions/getRequests';
import * as async from '../actions/async';

class FlightsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flightDate: new Date().toISOString(),
      flightNumber: null,
      flightNumberError: null
    };
  }

  componentWillMount() {
    this.props.dispatch(async.purge('flightDetails'));
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
        flightNumberError: null,
        flightNumber: this.flightNumber.value
      });
      const accessToken = this.props.currentUser.accessToken;
      this.props.dispatch(
        async.purge('flightDetails')
      );
      this.props.dispatch(
        getRequests.getFlightDetails(
          this.flightNumber.value.trim(), flightDate.trim(), accessToken
        )
      );
    }
  }

  render() {
    let flightDetails;
    if (this.props.flightDetails) {
      flightDetails = (
        <p className="flight-details-response">
          {
            `Flight number ${this.state.flightNumber} is set to arrive at
            ${this.props.flightDetails.airport} on ${this.props.flightDetails.date}.`
          }
        </p>
      );
    } else {
      flightDetails = <div />;
    }

    return (
      <div className="app-content-outer-wrapper">
        <div className="app-content-container">
        <h2 className="app-content-header flight-header">Track Your Flight</h2>
        <h4 className="flight-directions">Enter your flight number and departure date below.</h4>
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
            Flight numbers must include airline code (i.e., SKW5891).
          </div>
          <span className="user-error">
            {this.state.flightNumberError || this.props.appHasUserError ?
              this.state.flightNumberError || this.props.userError :
              null}
            </span>
        </div>
        <div className="flight-details-response-container">
          {flightDetails}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  flightDetails: state.flightDetails,
  appHasUserError: state.appHasUserError,
  userError: state.userError
});

export default connect(mapStateToProps)(FlightsPage);
