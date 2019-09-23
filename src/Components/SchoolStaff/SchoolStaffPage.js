import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SchoolStaffPersonInfo from './SchoolStaffPersonInfo';

const SchoolStaffPage = props => {
  return (
    <div className="SchoolStaffPageContainer">
      <h1>School Staff Home Page</h1>
      <SchoolStaffPersonInfo {...props} />
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};
export default connect(
  mapStateToProps,
  {}
)(SchoolStaffPage);
