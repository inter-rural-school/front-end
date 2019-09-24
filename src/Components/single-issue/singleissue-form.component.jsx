import React from 'react'
import { Row, Col , Button, Icon, Input, Select } from 'antd'
import {  Form, Field, ErrorMessage } from 'formik'

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
    <Form
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
               htmlFor='statusSelect'
                style={{textAlign: 'left',display:'block', marginBottom: '1rem' }} 
               >Status:</label>
              <Field 
                name="statusSelect"
                render={({ field}) => (
              <BMSelectStatus {...field} placeholder="" />
            )}
                />
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
                <Field 
                name="bmComment"
                render={({ field}) => (
              <BMComment {...field} placeholder="" />
            )}
                /> 
                </div>
            ) }


            { !isBM && (
              <div className={ styles.bmCommentDiv }>
                <label
                htmlFor='singleIssueTitle'
                  style={{textAlign: 'left',display:'block', marginBottom: '1rem' }} 
                >Title: </label>
                 <Input
                  placeholder="" 
                  onChange={ handleChange }
                  value={ currentIssue.title }
                  id="singleIssueTitle" 
                  name="singleIssueTitle"
                  />
                </div>
            ) }
               { !isBM && (
              <div className={ styles.bmCommentDiv }>
                <label
                htmlFor='singleIssueDescription'
                  style={{textAlign: 'left',display:'block', marginBottom: '1rem' }} 
                >Description: </label>
              </div>
            ) }

            {(!isBM && currentIssue.boardComment) &&<Stat label='Board Comment: ' data={ currentIssue.boardComment }/> }
        </Col>
      </Row>
      <div className={styles['singleIssue--footer']}>
          { !isBM && <Button>Delete</Button>}
          <Button 
             type='submit'
             >Submit Changes</Button>
      </div>
    </Form>


  )
}

function BMSelectStatus({  field, 
  form,
  ...props} ){
    return (
             <Select 
              { ...field}
              {...props}
                style={{ width: '100%', paddingLeft: '1rem' }} 
                >
                <Option value="Needs Attention">Needs Attention</Option>
                <Option value="Resolution In Progress">In Progress</Option>
                <Option value="Resolved">Resolved</Option>
                <Option value="Dismissed">Dismissed</Option>
              </Select>
    )
}
/*
  form:{
    values
  },
  */
function BMComment({  field, form, ...props} ){
    return (
   <Input.TextArea
                  autosize={{ 
                    minRows: 1,
                  }}
                  />
  )
}
