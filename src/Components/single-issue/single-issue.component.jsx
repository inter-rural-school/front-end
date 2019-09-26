import React , { useState, useEffect } from 'react'
import {  Icon } from 'antd'
import { Formik } from 'formik'

import SingleIssueForm from './singleissue-form.component'

import styles from './single-issue.module.less'


export default function SingleIssue(props ) {

let { 
    name ,
    school,
    isBoardMember,
  } = props.userData;

  let {
    status,
    issue_title,
    issue_description,
    date
  } = props.issue;

 let SSView = {
        statusSelect: status,
        createdBy: name,
        date: date,
        description:  props.issue.issue_description,
        title:  props.issue.issue_title
 }


  // console.log( 'single-issue issue: ', issue);
  console.log( 'single-issue props.issue: ', props.issue);
  // console.log( 'single-issue props.userData: ',props.userData);

  return (
    // hide the single issue view on mobile until user clicks view or edit button
    // <div className={ (props.dashState.viewIssue )? styles['singleIssue--container']: styles.hide }>
    <div className={  styles['singleIssue--container'] }>
      <div className={ styles['singleIssue--header']}>
          <p>ID: { props.issue.id || "#"}</p>
      </div>
      {/* initialValues must change based on user type 
      and if the user wants to create a new issue or edit an existing one.
       */}
       <Formik
        enableReinitialize
        initialValues={    {...SSView}  }
        status={ {stuff:'test status'}}

        onSubmit={ (values, { resetForm }) => {
          console.log(values)
          resetForm()
        } }

        render={ props => (
          <SingleIssueForm 
          {...props}
          isBM={ isBoardMember }
        />
      )}

    />

    </div>
  )
}
/*
      */

/*
      initialValues={{ 
        bmComment: ``,
        statusFilter: 'Needs Attention' }}

      initialValues={{
        statusSelect: status,
        createdBy: name,
        date: date,
        description: issue_description,
        title: props.issue.issue_title
      }}


        */
