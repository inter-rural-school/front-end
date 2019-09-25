import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const getRegister = (info, props) => dispatch => {
  console.log(info);
  dispatch({ type: REGISTER_START });
  axiosWithAuth()
    .post('/register', info)
    .then(res => {
      console.log(res);
      dispatch({ type: REGISTER_SUCCESS });
      props.history.push('/login');
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: REGISTER_FAILURE });
    });
};

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const getLogin = (info, props) => dispatch => {
  console.log(info);
  dispatch({ type: LOGIN_START });
  axiosWithAuth()
    .post('/login', info)
    .then(res => {
      console.log(res);
      dispatch({ type: LOGIN_SUCCESS });
      localStorage.setItem('token', res.data.token);
      props.history.push('/dashboard');
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE });
    });
};
