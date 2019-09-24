import React from 'react'
import { Row, Col , Button, Icon, Input, Select } from 'antd'
import { Form, ErrorMessage } from 'formik'

import styles from './singleissue-form.module.less'

import { issues, user } from '../../test-data'

const { Option } = Select;

function Stat( { label, data }){
  return(
    <div className={ styles.statRow }>
      <p>{ label }</p>
      <p>{ data }</p>
    </div>
  )
}

export default function SingleIssueForm( props ) {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  const currentIssue= issues[0];

  /* flag to see if current user is board member or school staff
  reads from Redux Store or wherever data is stored
  */

  // let isBM =  false;
  let isBM =  true;


  console.log('singleIssue-form issueData',props.issueData);
  return (
    <form
      onSubmit={ handleSubmit }
      className={ styles['singleIssue-form']}
    >
      <Row className={ styles['form--body-container']}>
        <Col 
          xs={24} 
          xl={8}
          className={ styles['form--stats']}
          >
            {/*if user is Boardmember, display as <select>, else <p>  */}
            { isBM && (
              <>
                <label
               htmlFor='statusFilter'
                style={{textAlign: 'left',display:'block', marginBottom: '1rem' }} 
               >Status:</label>
              <Select 
                id='statusfilter'
                name='statusfilter'
                style={{ width: '100%', paddingLeft: '1rem' }} 
                onChange={ props.handleChange }>
                <Option default value="needsAttention">Needs Attention</Option>
                <Option value="inProgress">In Progress</Option>
                <Option value="resolved">Resolved</Option>
                <Option value="dismissed">Dismissed</Option>
              </Select>
              </>
            )}
            { !isBM && <Stat label='Status: ' data={ currentIssue.status}/>}
            <Stat label='Created By: ' data={ user.name}/>

            <Stat label='Date Created:' data={currentIssue.dateCreated.toDateString() }/>
        </Col>
        <Col 
          xs={24} 
          xl={16}
          className={ styles['form--body']}
          >
          <p>Title</p>
          <p>Need English Teacher</p>
          <p>Description</p>
          <p>Board Comment</p>
        </Col>
      </Row>
      <div className={styles['singleIssue--footer']}>
          <Button>Delete</Button>
          <Button 
             type='submit'
             >Submit Changes</Button>
      </div>
    </form>


  )
}
