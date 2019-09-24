import React from 'react'
import { Row, Col , Button, Icon, Input, Select} from 'antd'
import { Form, ErrorMessage } from 'formik'

import styles from './singleissue-form.module.less'

export default function SingleIssueForm( props ) {
  return (
    <form
      className={ styles['singleIssue-form']}
    >
      <Row className={ styles['form--body-container']}>
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
    </form>


  )
}
