
export const APP_LOGIN_SUCCESS = 'APP_LOGIN_SUCCESS';
export const appLoginSuccess = currentUser => ({
  type: APP_LOGIN_SUCCESS,
  currentUser
});

export const DISPLAY_ERROR_TO_USER = 'DISPLAY_ERROR_TO_USER';
export const displayErrorToUser = error => ({
  type: DISPLAY_ERROR_TO_USER,
  error
});

export const ERROR_FROM_SERVER = 'ERROR_FROM_SERVER';
export const errorFromServer = error => ({
  type: ERROR_FROM_SERVER,
  error
});

export const FB_LOGIN_ERROR = 'FB_LOGIN_ERROR';
export const fbLoginError = error => ({
  type: FB_LOGIN_ERROR,
  error
});

export const FB_LOGIN_SUCCESS = 'FB_LOGIN_SUCCESS';
export const fbLoginSuccess = currentUser => ({
  type: FB_LOGIN_SUCCESS,
  currentUser
});

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
});

