import React from 'react'
import { Row, Col, Button, Icon } from 'antd'

import styles from './IssueList-Item.module.css'

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
        span={24} 
        className={ styles['issues--item--first-col']}
        >
          <p>{ props.data.dateCreated.toDateString() }</p>
        </Col>
        <Col span={24}><p>{ props.data.title}</p></Col>
        <Col span={8}>
          <Icon type={ iconType } style={{fontSize: '2rem'}}/>
        </Col>
        <Col span={16}>
          <Button>Delete</Button>
          <Button>View</Button>
        </Col>
      </Row>
  )
}
