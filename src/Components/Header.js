import React from 'react';
import { connect } from 'react-redux';

const Header = () => {
  return (
    <div className="HeaderContainer">
      <h1>International Rural School Report</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};
export default connect(
  mapStateToProps,
  {}
)(Header);
