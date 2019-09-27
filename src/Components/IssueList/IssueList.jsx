import React from 'react'
import { Row, Col  } from 'antd';
import { connect } from 'react-redux';
import styles from './IssueList.module.less'

import IssueListItem from './IssueList-Item.component'
import { NONAME } from 'dns';


function IssueList(props) {

  let showIssues = (props.winWidth >= 1200 || props.issueType === 'clear')? { display: 'flex' } : { display : 'none'} ;
  
  return (
    <div 
      className={styles['issues--container']} 
      style={ showIssues }
      >
      <div className={styles['issues--header']}>
        <p style={{ margin: 0 }}>{props.userData.school}</p>

        { !props.userInfo.isBoardMember && <button 
           onClick={ () =>  props.Set_IssueType( 'createnew') }
           className={styles['issues--header--btn']}>New Issue
        </button> }

      </div>
      <Row className={styles['issues--col-names']}>
        <Col xl={5}>Date Created</Col>
        <Col xl={6}>Title</Col>
        <Col xl={5}>Status</Col>
        <Col xl={2}>View</Col>
        { !props.userInfo.isBoardMember && <Col xl={2}>Delete</Col>}
      </Row>

      {props.issueData &&
        props.issueData.filter(issue => issue.status.includes(props.query)).map(issue => {
          return (
            <IssueListItem
              {...props}
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
  
  return {
    userInfo: state.userInfo,
  };
};

export default connect(
  mapStateToProps,
  {  }
)(IssueList);
