import React from 'react'
import { Row, Col, Button, Icon } from 'antd'
import { Formik } from 'formik'

import SingleIssueForm from './singleissue-form.component'

import styles from './single-issue.module.less'

const newIssueInit = {
  title: '',
  status: 'Needs Attention',
  description: '',


}
export default function SingleIssue( props ) {
  //set the initial values for the form
 let initState = {}

   /*
   Change handleSubmit function based on props

  If 'newIssueRequest' is true use PUSH action on submit
  Else use PUT action on submit to push changes to server
  */

  function createNewIssue( values, actions ){
    console.log('New issue created', values);
  }

  function editIssue( values, actions ){
    console.log('Issue Changed', values);
  }

  // determine which onSubmit function to use
  let submitAction = ( props.dashState.newIssueRequest === true)? createNewIssue : editIssue;

  console.log('issueData in singeIssue', props.issueData);
  console.log('dashState in singeIssue', props.dashState);
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
       <Formik
      { ...props }
      initialValues={{ name: 'jared' }}
      onSubmit={  submitAction  }
      render={ props => (
        <SingleIssueForm 
          {...props}
          onSubmit={ props.handleSubmit }
          />
      )}
    />
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
