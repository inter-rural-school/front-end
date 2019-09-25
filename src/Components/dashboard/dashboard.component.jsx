import React, { useState, useEffect } from 'react'
<<<<<<< HEAD
import axios from 'axios'
=======
>>>>>>> victor-arowo
import LayoutWrapper from '../layout/layout.component'
import styled from 'styled-components'
import { connect } from 'react-redux';
import styles from './dashboard.module.less'

import DashBoardMenu from '../dashboard-menu/dashboard-menu.component'
import SingleIssue from '../single-issue/single-issue.component'
import IssueList from '../IssueList/IssueList'

//import { user , issues} from  '../../test-data'

function Dashboard( props) {
  console.log('Dashboard props:', props);
  // store local state of dashboard
  /*
  The string used to filter the issues list in the Issues List component
  filterTerm: string

  newIssueRequest: bool
  
  ID of the issue the user want to view
  viewIssue: int
  */
  const [ dashBoardState, setDashBoardState ] = useState({});
  const [issueList, setIssues] = useState(props.issues);


  useEffect( ()=>{
    // fetch issue list from server
    axios
      .get(' https://internationalrsr.herokuapp.com/issues/')
      .then( res => console.log( 'issues list from server : ', res.data ))
      .catch( err => console.log( err));
  },[])

  function setViewIssue(e){
    console.log('setViewIssue event',e.target.id);
    setDashBoardState({
      ...dashBoardState,
      viewIssue: +e.target.id
    })
  }

  console.log('Dashboard state :',dashBoardState);

  return (
    <LayoutWrapper>
      <div className={ styles.contentContainer}>
        <DashBoardMenu 
          dashState={ dashBoardState }
          setDash={ setDashBoardState }
          setIssues={setIssues}
          issues={issueList}
          />
      <div className={ styles.issueContainer }>
        <IssueList 
          setViewIssue={ setViewIssue}
          userData={ props.userInfo }
          issueData={ issueList }
          dashState={ dashBoardState }
          setDash={ setDashBoardState }
        />
        <SingleIssue  
          dashState={ dashBoardState }
          setDash={ setDashBoardState }
          />
      </div>
      </div>
    </LayoutWrapper>
  )
}


const mapStateToProps = state => {
  console.log('current store', state)
  return {
    issues: state.issues,
    userInfo: state.userInfo,
  };
};
export default connect(
  mapStateToProps,
  { }
)(Dashboard);
