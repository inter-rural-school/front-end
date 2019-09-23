import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions';

const initialState = {
  isLoading: false,
  loginError: false
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loginError: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginError: true
      };
    default:
      return state;
  }
}

export default rootReducer;
