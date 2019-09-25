import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SAVE_ISSUE,
  FETCHING_ISSUES_START,
  FETCHING_ISSUES_SUCCESS,
  FETCHING_ISSUES_FAILURE
} from '../actions';

const initialState = {
  isFetching: false,
  isLogined: false,
  isLoading: false,
  getErrorMessage: false,
  userInfo: {
    isBoardMember: false,
    name: 'Tom Steve',
    school: 'Country School',
    school_id: 100000000
  },
  issues: []
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

    case SAVE_ISSUE:
      return {
        ...state,
        issues: [...state.issues, action.payload]
      };
    case FETCHING_ISSUES_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCHING_ISSUES_SUCCESS:
      return {
        ...state,
        issues: [...state.issues, action.payload],
        isFetching: false
      };
    default:
      return state;
  }
}

export default rootReducer;
