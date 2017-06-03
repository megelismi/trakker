import * as postResults from './actions/postResults';

const initialState = (state = {
  currentUser: null
  }, action) => {
    switch (action.type) {

    case postResults.APP_SIGN_UP_ERROR:
      return Object.assign({}, state, {
        userError: true,
        appSignUpError: action.error
      });

    case postResults.APP_SIGN_UP_SUCCESS:
      return Object.assign({}, state, {
        currentUser: action.user,
      });

    case postResults.FB_LOGIN_ERROR:
      return Object.assign({}, state, { fbLoginError: action.error });

    case postResults.FB_LOGIN_SUCCESS:
      return Object.assign({}, state, { currentUser: action.currentUser });

    default:
      return state;
  }
};

export default initialState;

