import React, { useState } from 'react'
import LayoutWrapper from '../layout/layout.component'
import styled from 'styled-components'


import DashBoardMenu from '../dashboard-menu/dashboard-menu.component'
import SingleIssue from '../single-issue/single-issue.component'
import IssueList from '../IssueList/IssueList'


const user = {
  isBoardMember: false,
  name: 'Tom Steve',
  school: 'Country School'
}

const issues = [
  {
    id : 101,
    title : 'Broken toilet',
    description: 'The toilet is broken',
    dateCreated: (new Date()),
    status: 'Needs Attention',
  },
{
    id : 201,
    title : 'Need paper',
    description: 'The school is out of paper',
    dateCreated: (new Date()),
    status: 'Resolution In Progress'
  },
{
    id : 301,
    title : 'Computer Exploded',
    description: 'The computer in the library exploded.',
    dateCreated: (new Date()),
    status: 'Resolved'
},
{
    id : 401,
    title : 'Need English Teacher',
    description: 'Last one got eaten by lion',
    dateCreated: (new Date()),
    status: 'Dismissed'
},
{
    id : 501,
    title : 'Pack of Hyenas',
    description: 'A pack of hyenas moved into the math room.',
    dateCreated: (new Date()),
    status: 'Resolution In Progress'
},
]


const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #6fa0d0;

  @media screen and (min-width: 1200px){
    flex-direction: row;
  }
`;

const IssueContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #6fa0d0;
`;

export default function Dashboard( props) {
  // store local state of dashboard
  /*
  The string used to filter the issues list in the Issues List component
  filterTerm: string
  */
  const [ dashBoardState, setDashBoardState ] = useState({})

  return (
    <LayoutWrapper>
      <ContentContainer>
        <DashBoardMenu 
          dashState={ dashBoardState }
          setDash={ setDashBoardState }
          />
      <IssueContainer>
        <IssueList 
          userData={ user }
          issueData={ issues }
          dashState={ dashBoardState }
          setDash={ setDashBoardState }
        />
        <SingleIssue 
          dashState={ dashBoardState }
          setDash={ setDashBoardState }
          />
      </IssueContainer>
      </ContentContainer>
    </LayoutWrapper>
  )
}
