import React, { useState } from 'react'
import LayoutWrapper from '../layout/layout.component'
import styled from 'styled-components'


import DashBoardMenu from '../dashboard-menu/dashboard-menu.component'
import SingleIssue from '../single-issue/single-issue.component'


const user = {
  isBoardMember: false,
  name: 'Tom',
  school: 'Country School'
}

const issues = [
  {
    id : 101,
    title : 'Broken toilet',
    description: 'The toilet is broken',
    dateCreated: (new Date()),
    status: 'Needs Attention'
  },
{
    id : 201,
    title : 'Need paper',
    description: 'The school is out of paper',
    dateCreated: (new Date()),
    status: 'Resolution In Progress'
  }
]


const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: lightgray;
`;

const IssueContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: lightgreen;
`;

export default function Dashboard( props) {
  // store local state of dashboard
  const [ dashBoardState, setDashBoardState ] = useState({})

  return (
    <LayoutWrapper>
      <ContentContainer>
        <DashBoardMenu 
          dashState={ dashBoardState }
          setDash={ setDashBoardState }
          />
      <IssueContainer>
        <SingleIssue 
          dashState={ dashBoardState }
          setDash={ setDashBoardState }
          />
      </IssueContainer>
      </ContentContainer>
    </LayoutWrapper>
  )
}
