import React, { useState, useEffect } from 'react';
import LayoutWrapper from '../layout/layout.component';
import styled from 'styled-components';
import { connect } from 'react-redux';
import styles from './dashboard.module.less';
import axios from 'axios'
import DashBoardMenu from '../dashboard-menu/dashboard-menu.component';
import SingleIssue from '../single-issue/single-issue.component';
import IssueList from '../IssueList/IssueList';

import { getIssueView, getIssueList } from '../../store/actions';

function Dashboard(props) {

  const [dashBoardState, setDashBoardState] = useState({});
  const [query, setQuery] = useState('');
  const [issuesList, setIssuesList] = useState([]);
  const [newIssues, setNewIssues] = useState({});
  const [ viewIssue, setViewIssue ] = useState(0)
  const{getIssueList}=props

  useEffect(() => {
    
    if (localStorage.getItem('token')) {
      axios
        .get('https://internationalrsr.herokuapp.com/issues/')
        .then(res => {
          console.log(res.data);
          setIssuesList(res.data)
        })
        .catch(err => {
          console.log(err);
        });
    }
    
  }, []);


  console.log('viewIssue :', viewIssue);

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
            issueData={issuesList}
            dashState={dashBoardState}
            setDash={setDashBoardState}
            query={query}
            updateIssues={setNewIssues}
          />
          <SingleIssue
            dashState={dashBoardState}
            setDash={setDashBoardState}
            viewIssue={viewIssue}
          />
        </div>
      </div>
    </LayoutWrapper>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    //issues: state.issues,
    userInfo: state.userInfo,
    isFetching: state.isFetching
  };
};
export default connect(
  mapStateToProps,
  { getIssueView, getIssueList }
)(Dashboard);
