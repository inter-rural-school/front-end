import "antd/dist/antd.css";
import { Modal, Button } from "antd";

export function formatDate() {
  var d = new Date(),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

const { confirm } = Modal;

export function showDeleteConfirm(id, props) {
  confirm({
    title: `Delete issue ${props.values.props.issue.issue_title} created by ${props.values.createdBy}?`,
    //content: "Some descriptions",
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {
      console.log("OK", props);

      props.deleteIssue(id, props);
    },
    onCancel() {
      console.log("Cancel");
    }
  });
}
export function showDeleteConfirmIssueList(id, props) {
  //console.log("showDeleteConfirmIssueList", id, props);
  confirm({
    title: `Delete issue ${props.data.issue_title} created by ${props.userData.first_name} ${props.userData.last_name}?`,
    //content: "Some descriptions",
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {
      console.log("OK", props);

      props.deleteIssue(id, props);
    },
    onCancel() {
      console.log("Cancel");
    }
  });
}
