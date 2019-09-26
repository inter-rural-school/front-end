import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 50px;
  height: 60px;
`;

const Header = () => {
  return (
    <Div className="HeaderContainer">
      <img src="https://ibb.co/bQ3CGYj" alt="logo" width="50px" />
      <h3>International Rural School</h3>
      <Link to="/">
        <Button type="primary">Log out</Button>
      </Link>
    </Div>
  );
};

const mapStateToProps = state => {
  return {};
};
export default connect(
  mapStateToProps,
  {}
)(Header);
