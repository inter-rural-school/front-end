import React from 'react';
import { Row, Col, Button, Icon } from 'antd';
import { connect } from 'react-redux';
import { deleteIssue} from '../../store/actions'
import styles from './IssueList-Item.module.less';

/*
      <Icon type="close-circle" />
      <Icon type="clock-circle" />
      <Icon type="check-circle" />
      <Icon type="exclamation-circle" />
      */

function IssuesListItem(props) {
  let iconType = '';

  // set the correct status icon
  switch (props.data.status) {
    case 'Needs Attention':
      iconType = 'exclamation-circle';
      break;

    case 'Resolution In Progress':
      iconType = 'clock-circle';
      break;

    case 'Dismissed':
      iconType = 'close-circle';
      break;

    case 'Resolved':
      iconType = 'check-circle';
      break;

    default:
        iconType='exclamation-circle'
  }

  console.log(typeof (props.setViewIssue));
  console.log(props);
  return (
    <Row className={styles['issues--item--wrapper']}>
      <Col
        xs={{
          span: 24
        }}
        xl={{
          span: 5
        }}
        className={styles['issues--item--first-col']}
      >
        <p>{props.data.date}</p>
      </Col>
      <Col
        xs={{
          span: 20
        }}
        xl={{
          span: 6
        }}
      >
        <p>{props.data.issue_title}</p>
      </Col>
      <Col
        xs={{
          span: 5
        }}
        xl={{
          span: 0
        }}
      >
        <Icon type={iconType} style={{ fontSize: '2rem' }} />
      </Col>
      <Col
        xs={{
          span: 0
        }}
        xl={{
          span: 5
        }}
      >
        <p> {props.data.status} </p>
      </Col>

      <Col
        xs={{
          span: 8,
          offset: 3
        }}
        xl={{
          span: 0
        }}
      >
        <button
          id={props.data.id}
          onClick={() => props.setViewIssue(props.data.id)}
        >
          View
        </button>
      </Col>

      <Col
        xs={{
          span: 8
        }}
        xl={{
          span: 0
        }}
      >
        <Button
          id={props.data.id}
          onClick={() => props.deleteIssue(props.data.id,{...props})}
        >
          Delete
        </Button>
      </Col>

      <Col
        xs={{
          span: 0
        }}
        xl={{
          span: 2
        }}
      >
        <Icon
          type="eye"
          id={props.data.id}
          onClick={() => props.setViewIssue(props.data.id)}
          style={{ fontSize: '2rem' }}
        />
      </Col>
      {!props.isBM && (
        <Col
          xs={{
            span: 0
          }}
          xl={{
            span: 2
          }}
        >
          <Icon type="delete" id={props.data.id} onClick={() => props.deleteIssue(props.data.id,{...props})} style={{ fontSize: '2rem' }} />
        </Col>
      )}
    </Row>
  );
}
const mapStateToProps = state => {
  console.log(state);
  return {

  };
};

export default connect(
  mapStateToProps,
  { deleteIssue }
)(IssuesListItem);