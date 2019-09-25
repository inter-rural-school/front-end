import React, { useState } from 'react';
import { Row, Col, Button, Icon, Form, Input, Select, Typography } from 'antd';
import { ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import styles from './singleissue-form.module.less';
import { withFormik } from 'formik';
import * as yup from 'yup';

import { saveIssue } from '../../store/actions';
//import { user } from '../../test-data';

const { Title } = Typography;

function Stat({ label, data }) {
  return (
    <div className={styles.statRow}>
      <p>{label}</p>
      <p>{data}</p>
    </div>
  );
}

const C = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
  } = props;

  console.log('singleIssue-form issueData', props);
  return (
    <>
      <Title>New Issue Form</Title>
      <form onSubmit={handleSubmit} className={styles['singleIssue-form']}>
        <Row className={styles['form--body-container']}>
          <Col xs={24} xl={8} className={styles['form--stats']}>
            <Stat label="Status: " data="Needs Attention" />

            <Stat label="Created By: " data={props.userInfo.name} />

            <Stat label="Date Created:" data={new Date().toDateString()} />
          </Col>
          <Col xs={24} xl={16} className={styles['form--body']}>
            <Form.Item
              help={touched.title && errors.title ? errors.title : ''}
              validateStatus={
                touched.title && errors.title ? 'error' : undefined
              }
            >
              <div className={styles.bmCommentDiv}>
                <label
                  htmlFor="singleIssueTitle"
                  style={{
                    textAlign: 'left',
                    display: 'block',
                    marginBottom: '1rem'
                  }}
                >
                  Title:{' '}
                </label>
                <Input
                  onChange={handleChange}
                  value={values.title}
                  onBlur={handleBlur}
                  id="singleIssueTitle"
                  name="title"
                />{' '}
              </div>
            </Form.Item>
            <Form.Item
              help={
                touched.description && errors.description
                  ? errors.description
                  : ''
              }
              validateStatus={
                touched.description && errors.description ? 'error' : undefined
              }
            >
              <div className={styles.bmCommentDiv}>
                <label
                  htmlFor="singleIssueDescription"
                  style={{
                    textAlign: 'left',
                    display: 'block',
                    marginBottom: '1rem'
                  }}
                >
                  Description:{' '}
                </label>
                <Input.TextArea
                  autosize={{
                    minRows: 5
                  }}
                  placeholder=""
                  onChange={handleChange}
                  value={values.description}
                  onBlur={handleBlur}
                  name="description"
                />
              </div>
            </Form.Item>
          </Col>
        </Row>
        <div className={styles['singleIssue--footer']}>
          <Button htmlType="submit">Submit</Button>
        </div>
      </form>
    </>
  );
};

const validationSchema = yup.object().shape({
  title: yup.string().required('Please provide a title'),
  description: yup.string().required('Please provide decription')
});
function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

const NewIssueForm = withFormik({
  mapPropsToValues: user => ({ user, title: '', description: '' }),
  handleSubmit: (values, { props, setSubmitting }) => {
    const issueInfo = {
      issue_title: values.title,
      issue_description: values.description,
      date: formatDate(new Date()),
      status: 'Needs Attention',
      school_id: 1 //values.user.userInfo.school_id
    };
    console.log(typeof issueInfo.date);
    console.log(issueInfo);
    props.saveIssue(issueInfo, props);
    setSubmitting(false);
  },

  validationSchema: validationSchema
})(C);

const mapStateToProps = state => {
  console.log(state);
  return {
    userInfo: state.userInfo
  };
};

export default connect(
  mapStateToProps,
  { saveIssue }
)(NewIssueForm);
