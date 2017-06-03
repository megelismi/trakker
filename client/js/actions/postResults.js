
export const APP_LOGIN_ERROR = 'APP_LOGIN_ERROR';
export const appLoginError = error => ({
  type: APP_LOGIN_ERROR,
  error
});

export const APP_LOGIN_SUCCESS = 'APP_LOGIN_SUCCESS';
export const appLoginSuccess = currentUser => ({
  type: APP_LOGIN_SUCCESS,
  currentUser
});

export const APP_SIGN_UP_ERROR = 'APP_SIGN_UP_ERROR';
export const appSignUpError = error => ({
  type: APP_SIGN_UP_ERROR,
  error
});

export const APP_SIGN_UP_SUCCESS = 'APP_SIGN_UP_SUCCESS';
export const appSignUpSuccess = currentUser => ({
  type: APP_SIGN_UP_SUCCESS,
  currentUser
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
