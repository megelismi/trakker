import * as postResults from './postResults';

export const findUserFromCookie = accessToken => dispatch => fetch(`/find/cookie/${accessToken}`)
  .then(res => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  }).then(user => {
    dispatch(postResults.appLoginSuccess(user));
  }).catch(err => {
    dispatch(postResults.appLoginSuccess(err));
  });
