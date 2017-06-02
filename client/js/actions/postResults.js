
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
