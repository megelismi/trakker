import React, { Component } from 'react';

class FlightsPage extends Component {

  sendFlightInfo(e) {
    e.preventDefault();
    console.log('flight number', this.flightNumber.value);
  }

  render() {
    return (
      <div className="flights-page-container">
       <form className="flight-info-form" onSubmit={this.sendFlightInfo.bind(this)}>
          <input
            className="flight-info-input"
            type="text"
            name="flight_number"
            placeholder="Flight number"
            ref={element => {
              this.flightNumber = element;
              return this.flightNumber;
            }}
          />
        <input className="submit-button" type="submit" value="Get Flight Details" />
        </form>
      </div>
    );
  }
}

export default FlightsPage;

