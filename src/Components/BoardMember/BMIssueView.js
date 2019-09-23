import React from 'react';
import { connect } from 'react-redux';

import BoardMemberPersonInfo from './BoardMemberPersonInfo';

const BMIssueView = props => {
  const backtoSSHome = () => {
    props.history.push('/boardmemberpage');
  };
  return (
    <div className="BMIssueViewContainer">
      <h1>Board Member Issue View Page</h1>
      <BoardMemberPersonInfo {...props} />
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
)(BMIssueView);
