import React, { useState, useEffect } from 'react';
import LayoutWrapper from '../layout/layout.component';
import styled from 'styled-components';
import { connect } from 'react-redux';
import styles from './dashboard.module.less';

import DashBoardMenu from '../dashboard-menu/dashboard-menu.component';
import SingleIssue from '../single-issue/single-issue.component';
import IssueList from '../IssueList/IssueList';

import { getIssueView, getIssueList } from '../../store/actions';
//import { user , issues} from  '../../test-data'

function Dashboard(props) {
  // store local state of dashboard
  /*
  The string used to filter the issues list in the Issues List component
  filterTerm: string

  newIssueRequest: bool
  
  ID of the issue the user want to view
  viewIssue: int
  */

  const [dashBoardState, setDashBoardState] = useState({});
  const [query, setQuery] = useState('');
  // const [issueList, setIssues] = useState(props.issues);
  const [token, setToken] = useState('');
const{getIssueList}=props

  useEffect(() => {
    
    if (localStorage.getItem('token')) {
      getIssueList();
    }
    
  }, []);

  function setViewIssue(e) {
    console.log('setViewIssue event', e.target.id);
    //will pass to single issue view(need endpoint)
    //props.getIssueView(props);
    setDashBoardState({
      ...dashBoardState,
      viewIssue: +e.target.id
    });
  }

  console.log('dashboard', props);

  console.log(dashBoardState.viewIssue);
  return (
    <LayoutWrapper>
      <div className={styles.contentContainer}>
        <DashBoardMenu
          dashState={dashBoardState}
          setDash={setDashBoardState}
          setQuery={setQuery}
        />
        <div className={styles.issueContainer}>
          <IssueList
            setViewIssue={setViewIssue}
            userData={props.userInfo}
            issueData={props.issues}
            dashState={dashBoardState}
            setDash={setDashBoardState}
            query={query}
          />
          <SingleIssue dashState={dashBoardState} setDash={setDashBoardState} />
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
    isFetching: state.isFetching
  };
};
export default connect(
  mapStateToProps,
  { getIssueView, getIssueList }
)(Dashboard);
