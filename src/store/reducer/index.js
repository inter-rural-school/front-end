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
  userInfo: {
    isBoardMember: false,
    name: 'Tom Steve',
    school: 'Country School'
  },
  issues: [
    {
      id: 101,
      title: 'Broken toilet',
      description: 'The toilet is broken',
      dateCreated: new Date(),
      status: 'Needs Attention'
    },
    {
      id: 201,
      title: 'Need paper',
      description: 'The school is out of paper',
      dateCreated: new Date(),
      status: 'Resolution In Progress'
    },
    {
      id: 301,
      title: 'Computer Exploded',
      description: 'The computer in the library exploded.',
      dateCreated: new Date(),
      status: 'Resolved'
    },
    {
      id: 401,
      title: 'Need English Teacher',
      description: 'Last one got eaten by lion',
      dateCreated: new Date(),
      status: 'Dismissed'
    },
    {
      id: 501,
      title: 'Pack of Hyenas',
      description: 'A pack of hyenas moved into the math room.',
      dateCreated: new Date(),
      status: 'Resolution In Progress'
    }
  ]
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
