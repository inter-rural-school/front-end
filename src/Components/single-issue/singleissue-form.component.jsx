import React from 'react'
import { 
  Row, 
  Col , 
  Input, 
} from 'antd'
import {  Form, Field, ErrorMessage } from 'formik'
import { updateForm, saveIssue, deleteIssue, saveComment } from '../../store/actions'
import { connect } from 'react-redux';
import styles from './singleissue-form.module.less'
import { showDeleteConfirm} from '../../utils/utils'
import { differenceInCalendarDays } from 'date-fns'

function Stat( { label, data }){
  return(
    <div className={ styles.statRow }>
      <p>{ label }</p>
      <p>{ data }</p>
    </div>
  )
}

function SingleIssueForm( props ) {

    //console.log('SingleIssueForm props', props);

  let {
    values,
    handleChange,
  } = props;

  let {
    id,
    createdBy,
    title ,
    bmComment,
    date ,
    description ,
    status,
  } = props.values;

// console.log('single issue form props', props);


  let isBM = props.userInfo.isBoardMember; 

  return (
    <Form className={styles["singleIssue-form"]}>
      <Row className={styles["form--body-container"]}>
        <Col xs={24} xl={8} className={styles["form--stats"]}>
          {/*issue status for Boardmember */}
          {isBM && (
            <>
              <label
                htmlFor="status"
                style={{
                  textAlign: "left",
                  display: "block",
                  marginBottom: "1rem"
                }}
              >
                Status:
              </label>
              <Field
                name="status"
                render={props => (
                  <BMSelectStatus {...props} placeholder={status} />
                )}
              />
            </>
          )}

          {/* issue status for SS */}
          {!isBM && <Stat label="Status: " data={status} />}

          {/* issue 'created by'  */}
          <Stat label="Created By: " data={createdBy} />

          {/* issue 'date created'  */}
          <Stat label="Date Created:" data={date} />

          {/* issue 'days passed'  */}
          <Stat
            label="Days Passed:"
            data={differenceInCalendarDays(new Date(), new Date(date))}
          />
        </Col>
        <Col xs={24} xl={16} className={styles["form--body"]}>
          {/*issue title for BM */}
          {isBM && <Stat label="Title: " data={title} />}

          {/*issue description for BM */}
          {isBM && <Stat label="Description: " data={description} />}

          {/*issue comment for BM */}
          {isBM && (
            <div className={styles.bmCommentDiv}>
              <label
                htmlFor="bmComment"
                style={{
                  textAlign: "left",
                  display: "block",
                  marginBottom: "1rem"
                }}
              >
                Board Comment:{" "}
              </label>
              <Input.TextArea
                name="bmComment"
                placeholder={"Board Member Comment"}
                onChange={handleChange}
                value={values.bmComment}
                autosize={{
                  minRows: 2,
                  maxRows: 2
                }}
              />
              <ErrorMessage component="p" name="bmComment" />
            </div>
          )}

          {/* issue title for SS */}
          {!isBM && (
            <div className={styles.bmCommentDiv}>
              <label
                htmlFor="title"
                style={{
                  textAlign: "left",
                  display: "block",
                  marginBottom: "1rem"
                }}
              >
                Title:{" "}
              </label>
              <Input
                placeholder={"issue title"}
                onChange={handleChange}
                value={values.title}
                id="title"
                name="title"
              />
              <ErrorMessage component="p" name="title" />
            </div>
          )}

          {/* issue description for SS */}
          {!isBM && (
            <div className={styles.bmCommentDiv}>
              <label
                htmlFor="description"
                style={{
                  textAlign: "left",
                  display: "block",
                  marginBottom: "1rem"
                }}
              >
                Description:{" "}
              </label>
              <Input.TextArea
                name="description"
                placeholder={"issue description"}
                onChange={handleChange}
                value={values.description}
                autosize={{
                  minRows: 4,
                  maxRows: 4
                }}
              />
              <ErrorMessage component="p" name="description" />
            </div>
          )}

          {/* {(!isBM && currentIssue.boardComment) &&<Stat label='Board Comment: ' data={ currentIssue.boardComment }/> } */}
        </Col>
      </Row>
      <div className={styles["singleIssue--footer"]}>
        {!isBM && props.issueType === 'edit' && (
          <button 
            onClick={ () => {
               showDeleteConfirm( id, props, title, props.Set_IssueType )
            }}
          >
            Delete
          </button>
        )}

        <button type="button" onClick={() => props.Set_IssueType("clear")}>
          Close
        </button>

        {/* submit button for SS- updating the issue_title and issue_description*/}

        {!isBM &&props.issueType === "edit" && (
          <button
            type="submit"
            onClick={() => {
              const issueInfo = {
                id: id,
                issue_title: title,
                issue_description: description,
                date: date,
                status: status,
                school_id: 1 //values.user.userInfo.school_id
              };
              // console.log("submit button update", props.values);
              // console.log("update form", issueInfo);
              props.updateForm(id, issueInfo, props);
              props.Set_IssueType('clear')

            }}
          >
            Submit
          </button>
        )}

        {/* submit button for BM- updating the issue_status and comment*/}

        {isBM && props.issueType === "edit" && (
          <button
            type="submit"
            onClick={() => {
              const issueInfo = {
                id: id,
                status: status,
                school_id: 1 //values.user.userInfo.school_id
              };
              const comment = {
                id: 1, //school id
                comment: bmComment,
                issue_id: id,
                board_id: props.userInfo.board_id
              };
              // console.log("submit button update", props.values);
              // console.log("saving form", comment);
              props.updateForm(id, issueInfo, props);
              props.saveComment(comment);
              props.Set_IssueType('clear')
            }}
          >
            Submit 
          </button>
        )}

        {props.issueType === "createnew" && (
          <button
            type="submit"
            onClick={() => {
              const issueInfo = {
                id: id,
                issue_title: title,
                issue_description: description,
                date: date,
                status: status,
                school_id: 1 //values.user.userInfo.school_id
              };
              console.log("submit button", props.values);
              props.saveIssue(issueInfo, props);
              props.Set_IssueType('clear')
            }}
          >
            Create
          </button>
        )}
      </div>
    </Form>
  );
}// end SingleIssueForm

function BMSelectStatus({  field, form, ...props} ){

    return (
             <select 
              { ...field}
              {...props}
                style={{ width: '100%', paddingLeft: '1rem' }} 
                >
                <option value="Needs Attention">Needs Attention</option>
                <option value="Resolution In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
                <option value="Dismissed">Dismissed</option>
              </select>
    )
}


const mapStateToProps = state => {
  //console.log(state);
  return {
    userInfo: state.userInfo,
    getErrorMessage: state.getErrorMessage
  };
};

export default connect(
  mapStateToProps,
  { updateForm, saveIssue, deleteIssue, saveComment}
)(SingleIssueForm);
