import React from 'react';
import { connect } from 'react-redux';

import SchoolStaffPersonInfo from './SchoolStaffPersonInfo';

const SSIssueView = props => {
  const backtoSSHome = () => {
    props.history.push('/schoolstaffpage');
  };
  return (
    <div className="SSIssueViewContainer">
      <h1>School Staff Issue View Page</h1>
      <SchoolStaffPersonInfo {...props} />
      <h2>content</h2>
      <button onClick={backtoSSHome}>Home</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};
export default connect(
  mapStateToProps,
  {}
)(SSIssueView);
