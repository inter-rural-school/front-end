import React   from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { connect } from 'react-redux'
import { updateForm } from "../../store/actions";


import { formatDate } from '../../utils/utils'

import SingleIssueForm from './singleissue-form.component'

import styles from './single-issue.module.less'


function SingleIssue( props ) {
console.log("singleIssue component:", props)
  let issueType = props.issueType;
  let showForm = ( issueType === 'clear')? false : true;
  //storing function in variable so that it can be passed to SingleIssueForm 
  const SIT = props.Set_IssueType; 

  // destructuring user data
  let { 
    first_name ,
    last_name,
    school,
    isBoardMember,
  } = props.userData;

  // destructuring user issue data
  let {
    id,
    status,
    issue_title,
    issue_description,
    date
  } = props.issue;

  let userName = ( first_name && last_name)? `${first_name.replace(/^[a-z]/, match=> match.toUpperCase())} ${last_name.replace(/^[a-z]/, match=> match.toUpperCase())}`: '';
  // inital values for new issues
  let InitNewIssue ={
    // create random number new issues
      id: Math.floor(Math.random()*10000),
      status: 'Needs Attention',
      createdBy: userName,
      date: formatDate(), 
      description:  '',
      title:  '',
  } 
 
  //initial values for existing issues 
  let InitEdit = {
        id: id,
        status : status,
        createdBy: userName,
        date: date,
        description:  issue_description,
        title:  issue_title
  }

  let initObject = ( issueType === 'edit' ) ? InitEdit : InitNewIssue;

  function submitNew( values ){
    const issueInfo = {
      issue_title: values.title,
      issue_description: values.description,
      date: values.date,
      status: values.status,
      school_id: 1 //values.user.userInfo.school_id
    };
    console.log('data to be submitted:', issueInfo );
    // props.saveIssue(issueInfo, props);
  }

  function editExisting(values){
    const issueInfo = {
      issue_title: values.title,
      issue_description: values.description,
      date: values.date,
      status: values.status,
      school_id: 1 //values.user.userInfo.school_id
    };
    console.log('data to be submitted:', issueInfo );
  }

  // set handleSubmit function
  let submitAction = (issueType === 'edit')? editExisting : submitNew;

  console.log( 'single-issue props.issue: ', props.issue);
  // console.log( 'single-issue props.userData: ',props.userData);
  // console.log('issueType prop of singleIssue:', props.issueType);

  return (
    // hide the single issue view on mobile until user clicks view or edit button
    // <div className={ (props.dashState.viewIssue )? styles['singleIssue--container']: styles.hide }>
    <div className={styles["singleIssue--container"]}>
      <div className={styles["singleIssue--header"]}>
        {showForm && <p>ID: {props.issue.id}</p>}
        {/* Message which shows when page first renders, user click 'close',  
    or submits the form, or deletes an issue */}
        {!showForm && (
          <p style={{ width: "100%" }}>
            Please select an issue from the list or create a new issue.
          </p>
        )}
      </div>

      {showForm && (
        <Formik
          enableReinitialize
          initialValues={{ ...initObject, props}}
          onSubmit={(values, { resetForm, setSubmitting  }) => {
            setSubmitting(true);
            console.log(values);
            // send data to server
            submitAction(values);
            // reset form
            props.Set_IssueType("clear");
            setSubmitting(false);
            resetForm();
          }}
          validationSchema={yup.object().shape({
            title: yup.string().required("Please provide a title"),
            description: yup.string().required("Please provide decription")
          })}
          render={props => (
            <SingleIssueForm
              {...props}
              isBM={isBoardMember}
              issueType={issueType}
              Set_IssueType={SIT}
              //updateData={updateData}
              //updateIssues={props.updateIssues}
            />
          )}
        />
      )}
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    getErrorMessage: state.getErrorMessage
  };
};

export default connect(
  mapStateToProps,
  { updateForm }
)(SingleIssue);
