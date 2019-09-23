import React from 'react'
import { Row, Col, Button, Icon } from 'antd'

import styles from './IssueList-Item.module.less'

/*
      <Icon type="close-circle" />
      <Icon type="clock-circle" />
      <Icon type="check-circle" />
      <Icon type="exclamation-circle" />
      */

export default function IssuesListItem( props) {
  let iconType = '';

  // set the correct status icon
  switch ( props.data.status ){
    case 'Needs Attention':
      iconType='exclamation-circle';
      break;

    case 'Resolution In Progress':
      iconType='clock-circle';
      break;

    case 'Dismissed':
      iconType='close-circle';
      break;

    case 'Resolved':
      iconType='check-circle';
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
          span: 6,
          }}
        className={ styles['issues--item--first-col']}
        >
          <p>{ props.data.dateCreated.toDateString() }</p>
        </Col>
        <Col 
         xs={{
          span: 20,
          }}
         xl={{
          span: 6,
         }}
        ><p>{ props.data.title}</p></Col>
        <Col 
         xs={{
          span: 4,
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
          span: 4,
          }}
        >
          <p> { props.data.status } </p>
        </Col>
 
        <Col 
         xs={{
          span: 10,
          }}
         xl={{
          span: 0,
          }}
          >
          <Button>View</Button>
        </Col>
        <Col 
         xs={{
          span: 10,
          }}
         xl={{
          span: 0,
          }}
          >
          <Button>Delete</Button>
        </Col>
        <Col 
         xs={{
          span: 0,
          }}
         xl={{
          span: 2,
          }}
          >
            <Icon type="eye" style={{fontSize: '2rem'}}/>
        </Col>
        <Col 
         xs={{
          span: 0,
          }}
         xl={{
          span: 2,
          }}
          >
            <Icon type="delete" style={{fontSize: '2rem'}}/>
        </Col>


      </Row>
  )
}
