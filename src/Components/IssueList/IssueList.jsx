import React from 'react'
import { Row, Col  } from 'antd';
import { connect } from 'react-redux';
import styles from './IssueList.module.less'

import IssueListItem from './IssueList-Item.component'

function IssueList(props) {
  
  return (
    <div className={styles['issues--container']}>
      <div className={styles['issues--header']}>
        <p style={{ margin: 0 }}>{props.userData.school}</p>

         <button 
           onClick={ () =>  props.Set_IssueType( 'createnew') }
           className={styles['issues--header--btn']}>New Issue
          </button> 

      </div>
      <Row className={styles['issues--col-names']}>
        <Col xl={5}>Date Created</Col>
        <Col xl={6}>Title</Col>
        <Col xl={5}>Status</Col>
        <Col xl={2}>View</Col>
        <Col xl={2}>Delete</Col>
      </Row>

      {props.issueData &&
        props.issueData.filter(issue => issue.status.includes(props.query)).map(issue => {
          return (
            <IssueListItem
              data={issue}
              key={issue.id}
              setIssue={ props.setIssue }
            />
          );
        })}
    </div>
  );
}
const mapStateToProps = state => {
  console.log(state);
  return {
    
  };
};

export default connect(
  mapStateToProps,
  {  }
)(IssueList);
