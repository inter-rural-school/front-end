import React from 'react'
import { Row, Col, Button, Icon } from 'antd'

import SingleIssueForm from './singleissue-form.component'

import styles from './single-issue.module.less'

export default function SingleIssue( props ) {
  return (
    // hide the single issue view on mobile until user clicks view or edit button
    // <div className={ (props.dashState.viewIssue )? styles['singleIssue--container']: styles.hide }>
    <div className={  styles['singleIssue--container'] }>
      <div className={ styles['singleIssue--header']}>
          { props.dashState.newIssueRequest &&    (
           <>
          <p>Create New Issue</p>
          <Icon type="exclamation-circle" />
          </>
          )}
       { !props.dashState.newIssueRequest &&    (
           <>
          {/* <p>ID: { props.viewItem.id }</p> */}
          <p>ID: 10140</p>
          </>
          )}
      </div>
      <SingleIssueForm />
    </div>
  )
}
/*
      <Row className={ styles['singleIssue--body-container']}>
        <Col xs={24} xl={8}>
          <p>Status</p>
          <p>Resolution in Progress</p>
          <p>Created By</p>
          <p>Date Created</p>
        </Col>
        <Col xs={24} xl={16}>
          <p>Title</p>
          <p>Need English Teacher</p>
          <p>Description</p>
        </Col>
      </Row>
        <div className={styles['singleIssue--footer']}>
            <Button>Delete</Button>
            <Button>Submit Changes</Button>
        </div>
*/
