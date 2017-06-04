import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-bootstrap-date-picker';
import moment from 'moment';
import * as getRequests from '../actions/getRequests';
import * as handlers from './handlers/handlers';
// import '../../../node_modules/react-datepicker/dist/react-datepicker.css';

class FlightsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date().toISOString()
    };
  }

  dateChange(date) {
    this.setState({
      startDate: date
    });
  }

  sendFlightInfo(e) {
    e.preventDefault();
    this.props.dispatch(getRequests.getFlightDetails(this.flightNumber.value));
  }

  render() {
    let flightDetails;
    if (this.props.flightDetails) {
      flightDetails = (
        <p>
          {
            `Flight number ${this.flightNumber.value} is set to arrive at `}
            <span className="bold">{`${this.props.flightDetails.airport}`}</span>
            {' on '}
            <span className="bold">{`${this.props.flightDetails.localDate}`}</span>
            {' at '}
            <span className="bold">{`${this.props.flightDetails.localTime}.`}</span>
        </p>
      );
    } else {
      flightDetails = <div />;
    }

    const firstName = handlers.getFirstName(this.props.currentUser.name);

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
            value={this.state.startDate}
            onChange={this.dateChange.bind(this)}
          />
          <input className="submit-button" type="submit" value="Get Flight Details" />
          </form>
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
