import React, { useState } from 'react'
import LayoutWrapper from '../layout/layout.component'
import styled from 'styled-components'

import styles from './dashboard.module.less'

import DashBoardMenu from '../dashboard-menu/dashboard-menu.component'
import SingleIssue from '../single-issue/single-issue.component'
import IssueList from '../IssueList/IssueList'

import { user , issues} from  '../../test-data'

export default function Dashboard( props) {
  // store local state of dashboard
  /*
  The string used to filter the issues list in the Issues List component
  filterTerm: string

  newIssueRequest: bool
  
  ID of the issue the user want to view
  viewIssue: int
  */
  const [ dashBoardState, setDashBoardState ] = useState({})

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
          />
      <div className={ styles.issueContainer }>
        <IssueList 
          setViewIssue={ setViewIssue}
          userData={ user }
          issueData={ issues }
          dashState={ dashBoardState }
          setDash={ setDashBoardState }
        />
        <SingleIssue 
          userData={ user }
          issueData={ issues }
          dashState={ dashBoardState }
          setDash={ setDashBoardState }
          />
      </div>
      </div>
    </LayoutWrapper>
  )
}
