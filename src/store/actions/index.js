import { axiosWithAuth } from '../../utils/axiosWithAuth';
import axios from 'axios';
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
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.user });
      localStorage.setItem('token', res.data.token);
      props.history.push('/dashboard');
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE });
    });
};

export const SAVE_ISSUE = 'SAVE_ISSUE';

export const saveIssue = info => dispatch => {
  console.log(info);
  axios
    .post('https://internationalrsr.herokuapp.com/issues/', info)
    .then(res => {
      console.log(res);
      dispatch({ type: SAVE_ISSUE, payload: info });
    })
    .catch(err => {
      console.log(err);
    });
};

export const FETCHING_ISSUES_START = 'FETCHING_ISSUES_START';
export const FETCHING_ISSUES_SUCCESS = 'FETCHING_ISSUES_SUCCESS';
export const FETCHING_ISSUES_FAILURE = 'FETCHING_ISSUES_FAILURE';

export const getIssueList = () => dispatch => {
  // dispatch({ type: FETCHING_ISSUES_START });
  // axios
  //   .get('https://internationalrsr.herokuapp.com/issues/')
  //   .then(res => {
  //     console.log(res);
  //     res.data.forEach(data => {
  //       dispatch({ type: FETCHING_ISSUES_SUCCESS, payload: data });
  //     });
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
};

export const getIssueView = props => dispatch => {
  props.history.push('/dashboard/issue_view/:id');
};

export const deleteIssue = (id, props) => dispatch => {
  console.log(props);
  axios
    .delete(`https://internationalrsr.herokuapp.com/issues/${id}`)
    .then(res => {
      console.log(res);
      props.updateIssues({ id });
      //dispatch({ type: DELETING_FRIENDS, payload: friend });
      // props.history.push('/dashboard');
    })
    .catch(err => {
      console.log(err);
    });
};

export const FETCHING_COMMENTS_START = 'FETCHING_COMMENTS_START';
export const FETCHING_COMMENTS_SUCCESS = 'FETCHING_COMMENTS_SUCCESS';
export const FETCHING_COMMENTS_FAILURE = 'FETCHING_COMMENTS_FAILURE';

export const getCommentList = () => dispatch => {
  dispatch({ type: FETCHING_COMMENTS_START });
  axios
    .get('https://internationalrsr.herokuapp.com/comments/')
    .then(res => {
      console.log('comments  from server :', res);
      res.data.forEach(data => {
        dispatch({ type: FETCHING_COMMENTS_SUCCESS, payload: res.data });
        });
      })
    .catch(err => {
      console.log(err);
    });
};


export const updateForm = (id, data) => dispatch => {
  
  console.log("updateform :", id, data);
  const updatedData = {
   
    date: data.date,
    issue_description: data.description,
    status: data.statusSelect,
    issue_title: data.title
  };
         axios
           .put(`https://internationalrsr.herokuapp.com/issues/${id}`,updatedData)
           .then(res => {
             console.log("updateform :", res);
             
           })
           .catch(err => {
             console.log(err);
           });
       };
