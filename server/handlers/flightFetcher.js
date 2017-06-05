'use strict';

import https from 'https';
import _ from 'underscore';

class FlightFetcher {
    /**
     * Creates a flight fetcher instance.
     *
     * @param {String} flightNumber
     * @param {String} flightDate
     */
  constructor(flightNumber, flightDate) {
    this._flightNumber = flightNumber.toLowerCase();
    this._flightDate = flightDate.toLowerCase();
    this._appId = process.env.FLIGHT_STATS_APP_ID;
    this._appKey = process.env.FLIGHT_STATS_APP_KEY;
  }

    /**
     * Set the flight number after initialization if needed.
     *
     * @param {String} flightNumber
     */
  setFlightNumber(flightNumber) {
    this._flightNumber = flightNumber;
  }

    /**
     * Fetches flight information.
     *
     * @param {Function} callback
     */
  getFlightInfo(callback) {
    if (!this._flightNumber) {
      throw new Error('Flight Fetcher missing flight number.');
    }

  const options = {
    hostname: 'api.flightstats.com',
    method: 'GET',
    path: this._urlPath()
  };

  const req = https.request(options, (response) => {
    let data = '';
    response.setEncoding('utf8');
    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      const reply = JSON.parse(data);
      console.log('reply', reply.flightStatuses[0].arrivalDate);
      callback(null, this._formatResponse(reply));
    });
  });

  req.on('error', (error) => {
    console.log('Error: fetching flight info for flight:', this._flightNumber, 'error:', error);
    callback(error, null);
  });

  req.end();
}

  /**
   * Builds the path for https library.
   *
   * @returns {string}
   * @private
   */
  _urlPath() {
    const date = this._parseFlightDate();
    const flightNumber = this._parseFlightNumber();

    return `/flex/flightstatus/rest/v2/json/flight/status/${flightNumber.airline
     }/${flightNumber.number}/dep/${date.year}/${date.month}/${date.day}?appId=${
     this._appId}&appKey=${this._appKey}&utc=false`;
  }

  /**
   * Parses the raw flight number into its component.
   *
   * @returns {{airline: string, number: string}}
   * @private
   */
  _parseFlightNumber() {
    if (!this._flightNumber || this._flightNumber.length <= 2) {
      throw new Error('Cannot parse flight number');
    }

    const airline = this._flightNumber.substring(0, 2);
    const number = this._flightNumber.substring(2, this._flightNumber.length);

    return {
      airline,
      number
    };
  }

  /**
   * Parses the raw flight date into its components.
   *
   * @returns {{year: *, month: *, day: *}}
   * @private
   */
  _parseFlightDate() {
    if (!this._flightDate) {
      throw new Error('No flight date. Cannot parse the date');
    }

    const parts = this._flightDate.split('-');
    if (parts.length !== 3 || parts[0].length !== 4 || parts[1].length !== 2 || parts[2].length !== 2) {
      throw new Error('Flight Date is in incorrect format.');
    }

    return {
      year: parts[0],
      month: parts[1],
      day: parts[2]
    };
  }

    /**
     * Trims the response object from the api to only the necessary fields.
     *
     * @param {Object} reply
     * @returns {*}
     * @private
     */
  _formatResponse(reply) {
    const formattedResp = null;
    if (!_.has(reply.flightStatuses[0], 'arrivalDate') ||
        !_.has(reply.flightStatuses[0].arrivalDate, 'dateLocal') ||
        !_.has(reply.appendix.airports[1], 'name')) {
        return formattedResp;
    }

    return {
      date: reply.flightStatuses[0].arrivalDate.dateLocal,
      airport: reply.appendix.airports[1].name
    };
  }

}

module.exports = FlightFetcher;
