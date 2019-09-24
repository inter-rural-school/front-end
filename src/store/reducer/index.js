import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions';

const initialState = {
  isLogined: false,
  isLoading: false,
  getErrorMessage: false,
  userName: ''
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        getErrorMessage: false
      };
    case REGISTER_SUCCESS:
      return {
        ...state
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        getErrorMessage: true
      };
    case LOGIN_START:
      console.log(action.payload);
      return {
        ...state,
        getErrorMessage: false,
        isLogined: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogined: true
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        getErrorMessage: true
      };
    default:
      return state;
  }
}

export default rootReducer;
