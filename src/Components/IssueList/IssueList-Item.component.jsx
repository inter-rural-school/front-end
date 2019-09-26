import React from 'react';
import { Row, Col, Button, Icon } from 'antd';
import { connect } from "react-redux";
import styles from './IssueList-Item.module.less';
import { deleteIssue} from '../../store/actions'
/*
      <Icon type="close-circle" />
      <Icon type="clock-circle" />
      <Icon type="check-circle" />
      <Icon type="exclamation-circle" />
      */

function IssuesListItem(props) {
  let iconType = '';
//console.log('issuelistitem', props)
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

  return (
      <Row className={styles['issues--item--wrapper']}>
        <Col 
         xs={{
          span: 24,
          }}
         xl={{
          span: 5,
          }}
        className={ styles['issues--item--first-col']}
        >
        <p>{props.data.date }</p>
        </Col>
        <Col 
         xs={{
          span: 20,
          }}
         xl={{
          span: 6,
         }}
      ><p>{props.data.issue_title}</p></Col>
        <Col 
         xs={{
          span: 5,
          }}
         xl={{
          span: 0,
          }}
        >
          <Icon type={ iconType } style={{fontSize: '2rem'}}/>
        </Col>
        <Col 
         xs={{
          span: 0,
          }}
         xl={{
          span: 5,
          }}
        >
          <p> { props.data.status } </p>
        </Col>
 
        <Col 
         xs={{
          span: 8,
          offset: 3,
          }}
         xl={{
          span: 0,
          }}
          >
          <button 
           id={ props.data.id }
           align='middle'
           onClick={ ()=> props.setIssue( props.data.id ) }
           >View</button>
        </Col>

        <Col 
         xs={{
          span: 8,
          }}
         xl={{
          span: 0,
          }}
          >
          <button 
          id={props.data.id}
          onClick={() => {
            props.deleteIssue(props.data.id, props);
          }}
            >Delete</button>
        </Col>
        

        <Col 
         xs={{
          span: 0,
          }}
         xl={{
          span: 2,
          }}
          >
            <Icon 
              type="eye" 
              id={ props.data.id }
              onClick={ ()=> props.setIssue( props.data.id ) }
              style={{fontSize: '2rem'}}/>
        </Col>
      { !props.isBM && (
        <Col 
         xs={{
          span: 0,
          }}
         xl={{
          span: 2,
          }}
          >
            <Icon 
              type="delete" 
              id={ props.data.id }
              style={{fontSize: '2rem'}}/>
        </Col>
      )}
          </Row>
  );
}
const mapStateToProps = state => {
  
  return {

  };
};

export default connect(
  mapStateToProps,
  { deleteIssue}
)(IssuesListItem);
