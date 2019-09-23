import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const getLogin = info => dispatch => {
  //dispatch({ type: LOGIN_START });
  console.log('hello');

  console.log(info);
  //   axiosWithAuth()
  //     .post("/login", info)
  //     .then(res => {
  //       console.log(info);

  //     })
  //     .catch(err => {
  //       console.log(err);
  //       dispatch({ type: LOGIN_FAILURE });
  //     });
};
