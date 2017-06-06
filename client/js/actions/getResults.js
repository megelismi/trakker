
export const GET_FLIGHT_DETAILS_SUCCESS = 'GET_FLIGHT_DETAILS_SUCCESS';
export const getFlightDetailsSuccess = details => ({
  type: GET_FLIGHT_DETAILS_SUCCESS,
  details
});

export const PURGE_USER_DISPLAY_ERROR = 'PURGE_USER_DISPLAY_ERROR';
export const purgeUserDisplayError = () => ({
  type: PURGE_USER_DISPLAY_ERROR
});
