import actions from '../constants/actions.js';

export const checkSessionActionCreator = () => (dispatch) => {
/*
  thunked action creator that sends request to check
  if the user has an existing authenticated session
*/

  fetch('https://localhost:3000/api/users')
    .then(res => res.json())
    .then(userData => {

      dispatch({
        type: actions.CHECK_SESSION,
        payload: userData
      });

      /*
      payload is expected to be an object with two properties
        1. verified: true/false
        2. userProfile: {data} if verified, {} if not
      */
    })
    .catch(dispatch({
      type: actions.CHECK_SESSION,
      payload: {
        verified: false,
        userProfile: {}
      }
    }));

}

export const userLoginActionCreator = (e) => (dispatch) => {
/*
  thunked action creator expecting argument (e) 
  representing a React synthetic event for login form submission
*/

  e.preventDefault();

  fetch('https://localhost:3000/api/users/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userName: e.target[0].value,
      password: e.target[1].value
    })
  })
    .then(res => res.json())
    .then(userProfile => {

      //Successful log-in
      if (res.status >= 200 && res.status < 300) {
        dispatch({
          type: actions.LOG_IN,
          payload: {
            verified: true,
            userProfile: userProfile
          }
        });

      //Unsuccessful log-in
      } else if (res.status >= 400) {
        dispatch({
          type: actions.LOG_IN,
          payload: {verified: false}
        });
      }  

    }) //Request error
    .catch((e) => {
      dispatch({
      type: actions.LOG_IN,
      payload: {verified: false}
      });
    });
}

export const createUserActionCreator = (e) => (dispatch) => {
/*
  thunked action creator to create a user expecting (e)
  representing a React synthetic event for user creation form
*/

  e.preventDefault();

  fetch('http://localhost:3000/api/users/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application-json'
    },
    body: {
      username: e.target[0].value,
      password: e.target[1].value,
      email: e.target[2].value,
      firstName: e.target[3].value,
      lastName: e.target[4].value
    }
  })
    .then(res => res.json())
    .then(user => {

      //successful user creation
      if (res.status >= 200 && res.status < 300) {
        dispatch({
          type: actions.CREATE_USER,
          payload: {
            verified: true,
            userProfile: user
          }
        })

      //unsuccessful user creation
      } else if (res.status >= 400) {
        dispatch({
            type: actions.CREATE_USER,
            payload: {verified: false}
        });
      }
    })
    .catch((e) => {
      dispatch({
        type: actions.CREATE_USER,
        payload: {verified: false}
      });
    });

}