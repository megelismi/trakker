import Cookies from 'js-cookie';
import _ from 'underscore';
import * as postResults from './postResults.js';

export const appLogin = user => dispatch => {
  const url = '/login';
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
      .then(error => {
        if (_.has(error, 'displayMessage')) {
          dispatch(postResults.displayErrorToUser(error.displayMessage));
        } else {
          dispatch(postResults.errorFromServer(error));
        }
      });
    }
    return res.json()
    .then(currentUser => {
      Cookies.set('savori_token', currentUser.accessToken);
      dispatch(postResults.appLoginSuccess(currentUser));
    });
  });
};

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
        .then(error => dispatch(postResults.errorFromServer(error.message)));
      }
        return res.json()
        .then(currentUser => {
          Cookies.set('savori_token', currentUser.accessToken);
          dispatch(postResults.appLoginSuccess(currentUser));
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
          Cookies.set('savori_token', currentUser.accessToken);
          dispatch(postResults.fbLoginSuccess(currentUser));
        });
    });
  };
