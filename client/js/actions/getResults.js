export const GET_FLIGHT_DETAILS_ERROR = 'GET_FLIGHT_DETAILS_ERROR';
export const getFlightDetailsError = error => ({
  type: GET_FLIGHT_DETAILS_ERROR,
  error
});

export const GET_FLIGHT_DETAILS_SUCCESS = 'GET_FLIGHT_DETAILS_SUCCESS';
export const getFlightDetailsSuccess = details => ({
  type: GET_FLIGHT_DETAILS_SUCCESS,
  details
});
