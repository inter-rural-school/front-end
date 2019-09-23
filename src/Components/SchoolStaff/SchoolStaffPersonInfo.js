import React from 'react';
import { connect } from 'react-redux';

const SchoolStaffPersonInfo = props => {
  const Logout = () => {
    window.localStorage.removeItem('token');
    props.history.push('/');
  };
  return (
    <div className="SSPersonInfoContainer">
      <h3>School Staff Person Info</h3>

      <button onClick={Logout}>Log Out</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};
export default connect(
  mapStateToProps,
  {}
)(SchoolStaffPersonInfo);
