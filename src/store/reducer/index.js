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
  FETCHING_ISSUES_FAILURE,
  FETCHING_COMMENTS_START,
  FETCHING_COMMENTS_SUCCESS,
  FETCHING_COMMENTS_FAILURE
} from '../actions';

export const initialState = {
  isFetching: false,
  isLogined: false,
  isLoading: false,
  getErrorMessage: false,
  userInfo: {},
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
      return {
        ...state,
        getErrorMessage: false,
        isLogined: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogined: true,
        userInfo: {
          admin_id: action.payload.admin_id,
          board_id: action.payload.board_id,
          email: action.payload.email,
          first_name: action.payload.first_name,

          isBoardMember: action.payload.isBoardMember,
          last_name: action.payload.last_name,
          school: 'Country School',
          school_id: 100000000
        }
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
      console.log(action.payload);
      return {
        ...state,
        issues: [...state.issues, action.payload],
        isFetching: false
      };
    case FETCHING_COMMENTS_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCHING_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: [...state.comments, ...action.payload],
        isFetching: false
      };

    default:
      return state;
  }
}

export default rootReducer;
