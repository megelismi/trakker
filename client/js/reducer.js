import * as getResults from './actions/getResults';
import * as postResults from './actions/postResults';

const initialState = (state = {
  currentUser: null
  }, action) => {
    switch (action.type) {

    case postResults.APP_LOGIN_ERROR:
      return Object.assign({}, state, {
        appHasAuthError: true,
        authError: action.error
      });

    case postResults.APP_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        appHasAuthError: false,
        authError: null,
        currentUser: action.currentUser,
      });

    case postResults.FB_LOGIN_ERROR:
      return Object.assign({}, state, { fbLoginError: action.error });

    case postResults.FB_LOGIN_SUCCESS:
      return Object.assign({}, state, { currentUser: action.currentUser });

    case getResults.GET_FLIGHT_DETAILS_SUCCESS:
      return Object.assign({}, state, { flightDetails: action.details });

    default:
      return state;
  }
};

export default initialState;

