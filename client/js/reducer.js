import * as getResults from './actions/getResults';
import * as postResults from './actions/postResults';

const initialState = (state = {
  currentUser: null
  }, action) => {
    switch (action.type) {

    case postResults.APP_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        currentUser: action.currentUser,
        appHasServerError: false,
        serverError: null,
        userError: null,
        appHasUserError: false
      });

    case postResults.DISPLAY_ERROR_TO_USER:
      return Object.assign({}, state, {
        appHasUserError: true,
        userError: action.error,
        flightDetails: null
      });

    case postResults.ERROR_FROM_SERVER:
      return Object.assign({}, state, {
        appHasServerError: true,
        serverError: action.error
      });

    case postResults.FB_LOGIN_ERROR:
      return Object.assign({}, state, { fbLoginError: action.error });

    case postResults.FB_LOGIN_SUCCESS:
      return Object.assign({}, state, { currentUser: action.currentUser, fbLoginError: null});

    case getResults.GET_FLIGHT_DETAILS_SUCCESS:
      return Object.assign({}, state, {
        flightDetails: action.details,
        serverError: null,
        appHasServerError: false,
        userError: null,
        appHasUserError: false
      });

    case postResults.LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        currentUser: null
      });

    case getResults.PURGE_USER_DISPLAY_ERROR:
      return Object.assign({}, state, {
        appHasUserError: false,
        userError: null
      });

    default:
      return state;
  }
};

export default initialState;

