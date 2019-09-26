import React, { useState, useEffect } from 'react';
import LayoutWrapper from '../layout/layout.component';
import { connect } from 'react-redux';
import styles from './dashboard.module.less';
import axios from 'axios'
import DashBoardMenu from '../dashboard-menu/dashboard-menu.component';
import SingleIssue from '../single-issue/single-issue.component';
import IssueList from '../IssueList/IssueList';

import { getIssueView, getIssueList, getCommentList } from '../../store/actions';

function Dashboard(props) {
  const [currentIssue, setCurrentIssue ] = useState({})
  const [ issueType, setIssueType ] = useState('clear');
  const [query, setQuery] = useState('');
  const [token, setToken] = useState('');

  // interactions with Redux Store
  const{getIssueList}=props
  const { getCommentList } = props

  // fetch data from Redux Store
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getIssueList();
      getCommentList();
    }
  }, []);

  function Set_IssueType( type ){
    /*
    clear : shows message
    edit: shows issue user clicked on
    createnew: blank form for creating  a new issue
    */
    setIssueType( type )
  }

  function findIssue( id ){
    // return the issue object from the list of issues with an id attribute that matches 'id'
    return props.issues.reduce( ( match , issue) => {
        return issue.id === id ? match = issue : match;
    }, {})
  }

  function setIssue( id ){
    // a callback function to be passed down to buttons
    let result = findIssue(id);
    setCurrentIssue(  result );
    Set_IssueType('edit')
  }

  // console.log('issues in Redux state: ',props.issues);
  // console.log('Comments in Redux state: ',props.comments);
// console.log('User Info:', props.userInfo );
// console.log('currentIssue',currentIssue);
// console.log( 'issueType :', issueType);

  return (
    <LayoutWrapper>
      <div className={styles.contentContainer}>
        <DashBoardMenu
          setQuery={setQuery}
        />
        <div className={styles.issueContainer}>
          <IssueList
            Set_IssueType={ Set_IssueType }
            setIssue= {setIssue }
            userData={props.userInfo}
            issueData={props.issues}
            query={query}
          />
          <SingleIssue 
            userData={props.userInfo}
            issue={ currentIssue }
            issueType={ issueType }
            Set_IssueType={ Set_IssueType }
            />
        </div>
      </div>
    </LayoutWrapper>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    issues: state.issues,
    userInfo: state.userInfo,
    comments: state.comments,
    isFetching: state.isFetching
  };
};
export default connect(
  mapStateToProps,
  { getIssueView, getIssueList, getCommentList }
)(Dashboard);
