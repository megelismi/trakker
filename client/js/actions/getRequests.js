import _ from 'underscore';
import * as getResults from './getResults';
import * as postResults from './postResults';

/*eslint-disable no-undef*/

export const findUserFromCookie = accessToken => dispatch => fetch(`/find/cookie/${accessToken}`)
  .then(res => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  }).then(user => {
    dispatch(postResults.appLoginSuccess(user));
  }).catch(err => {
    dispatch(postResults.errorFromServer(err));
  });

export const getFlightDetails = (flightNumber, flightDate, accessToken) =>
dispatch => fetch(`/flights/${flightNumber}/${flightDate}`, {
  method: 'get',
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
  .then(res => {
    if (!res.ok) {
      return res.json()
      .then(error => {
        if (_.has(error, 'displayMessage')) {
          dispatch(postResults.displayErrorToUser(error.displayMessage));
        } else {
          dispatch(postResults.errorFromServer(error));
        }
      });
    }
    return res.json()
    .then(flightDetails => {
      dispatch(getResults.getFlightDetailsSuccess(flightDetails));
    });
  });
