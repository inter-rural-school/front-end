import React from 'react'
import { Row, Col , Button, Icon, Form, Input, Select } from 'antd'
import {  ErrorMessage } from 'formik'

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

  const currentIssue= issues[1];

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
                defaultValue={ currentIssue.status }
                name='statusfilter'
                style={{ width: '100%', paddingLeft: '1rem' }} 
                onChange={ props.handleChange }>
                <Option value="needsAttention">Needs Attention</Option>
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
            { isBM && <Stat label='Title: ' data={ currentIssue.title }/> }
            { isBM && <Stat label='Description: ' data={ currentIssue.description }/> }
            { isBM && (
              <div className={ styles.bmCommentDiv }>
                <label
                htmlFor='bmComment'
                  style={{textAlign: 'left',display:'block', marginBottom: '1rem' }} 
                >Board Comment: </label>
                 <Input.TextArea
                  autosize={{ 
                    minRows: 3,
                  }}
                  placeholder="" 
                  value={ currentIssue.boardComment }
                  id="bmComment" 
                  />
                </div>
            ) }
        </Col>
      </Row>
      <div className={styles['singleIssue--footer']}>
          { !isBM && <Button>Delete</Button>}
          <Button 
             type='submit'
             >Submit Changes</Button>
      </div>
    </form>


  )
}
/*
                <Form.Item
                  layout='horizontal'
                  label="Board Comment"
                  // validateStatus=""
                  help=""
                >
                  <Input.TextArea
                  placeholder="" 
                  value={ currentIssue.boardComment }
                  id="boardComment" 
                  />
                </Form.Item>
*/
