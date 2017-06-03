import * as postResults from './postResults.js';

export const appSignUp = user => dispatch => {
    const url = '/signup';
    return fetch(url, {
      method: 'post',
      headers: {
        'Content-type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(user)
    })
    .then(res => {
      if (!res.ok) {
        return res.json()
        .then(error => dispatch(postResults.appSignUpError(error.message)));
      }
        return res.json()
        .then(currentUser => {
          dispatch(postResults.appSignUpSuccess(currentUser));
        });
    });
  };


export const fbLogin = user => dispatch => {
    const url = '/fblogin';
    return fetch(url, {
      method: 'post',
      headers: {
        'Content-type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(user)
    })
    .then(res => {
      if (!res.ok) {
        return res.json()
        .then(error => dispatch(postResults.fbLoginError(error.message)));
      }
        return res.json()
        .then(currentUser => {
          dispatch(postResults.fbLoginSuccess(currentUser));
        });
    });
  };
