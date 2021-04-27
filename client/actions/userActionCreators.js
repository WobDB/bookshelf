import actions from '../constants/actions.js';

export const checkSessionActionCreator = () => (dispatch) => {
/*
  thunked action creator that sends request to check
  if the user has an existing authenticated session
*/

  console.log('About to check session');
  fetch('http://localhost:3000/api/users')
    .then(res => res.json())
    .then(userData => {
      
      console.log('userData: ', userData);
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
    .catch((err) => {
      dispatch({
      type: actions.CHECK_SESSION,
      payload: {
        verified: false,
        userProfile: {}
      }});
   });

}

export const userLoginActionCreator = (e) => (dispatch) => {
/*
  thunked action creator expecting argument (e) 
  representing a React synthetic event for login form submission
*/

  e.preventDefault();
  console.log(JSON.stringify({
    username: e.target[0].value,
    password: e.target[1].value
  }));

  console.log('About to send a login POST request');

  fetch('http://localhost:3000/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: e.target[0].value,
      password: e.target[1].value
    })
  })
    .then(res => res.json())
    .then(userProfile => {
      dispatch({
        type: actions.LOG_IN,
        payload: userProfile
      });
    }) //Request error
    .catch((e) => {
      dispatch({
      type: actions.LOG_IN,
      payload: {
        verified: false,
        userProfile: {}
      }
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
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: e.target[0].value,
      password: e.target[1].value,
      email: e.target[2].value,
      firstName: e.target[3].value,
      lastName: e.target[4].value
    })
  })
    .then(res => res.json())
    .then(userProfile => {
      dispatch({
        type: actions.CREATE_USER,
        payload: userProfile
      })
    })
    .catch((e) => {
      dispatch({
        type: actions.CREATE_USER,
        payload: {
          verified: false,
          userProfile: {}
        }
      });
    });

}