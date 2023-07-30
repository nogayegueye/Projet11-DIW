import axios from 'axios';

// Action types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Action creators
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// Async action creator
export const loginUser = (username, password) => {
  return (dispatch) => {
    dispatch(loginRequest());

    // Make API call to authenticate user
    axios.post('/api/login', { username, password })
      .then((response) => {
        // Dispatch success action with user data
        dispatch(loginSuccess(response.data));
      })
      .catch((error) => {
        // Dispatch failure action with error message
        dispatch(loginFailure(error.message));
      });
  };
};
