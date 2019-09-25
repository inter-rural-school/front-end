import React from 'react'
import { Row, Col , Button} from 'antd';
import { connect } from 'react-redux';
import styles from './IssueList.module.less'
import { Link } from 'react-router-dom';


import IssueListItem from './IssueList-Item.component'


// const isBM = true;
const isBM = false;

/*
      <Icon type="close-circle" />
      <Icon type="clock-circle" />
      <Icon type="check-circle" />
      <Icon type="exclamation-circle" />
      */

function IssueList(props) {

  
  return (
    <div className={styles['issues--container']}>
      <div className={styles['issues--header']}>
        <p style={{ margin: 0 }}>{props.userData.school}</p>
        <Link to="/dashboard/issue_form">
          <Button className={styles['issues--header--btn']}>New Issue</Button>
        </Link>
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
              setViewIssue={props.setViewIssue}
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
