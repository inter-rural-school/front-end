import React from 'react';
import { connect } from 'react-redux';

const BoardMemberPersonInfo = props => {
  const Logout = () => {
    window.localStorage.removeItem('token');
    props.history.push('/');
  };
  return (
    <div className="BMPersonInfoContainer">
      <h3>Board Member Person Info</h3>

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
)(BoardMemberPersonInfo);
