import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import BoardMemberPersonInfo from './BoardMemberPersonInfo';

const BoardMemberPage = props => {
  return (
    <div className="BoardMemberPageContainer">
      <h1>Board Member Home Page</h1>
      <BoardMemberPersonInfo {...props} />
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};
export default connect(
  mapStateToProps,
  {}
)(BoardMemberPage);
