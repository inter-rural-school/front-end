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

const BlueBtn = styled(Button)`
    background-color: #6FA0D0;
    border-radius: 10px;
    color: #fff;
    border: 2px solid #6FA0D0 !important;
    transition: background-color 0.5s;

    &:hover{
      background-color: #fff;
      color:  #6FA0D0;
    }

    &:focus{
      background-color: #fff;
      color: #6FA0D0;
    }
`;

const Header = () => {
  return (
    <Div className="HeaderContainer">
      <img src="https://ibb.co/bQ3CGYj" alt="logo" width="50px" />
      <h1>International Rural School</h1>
      <Link to="/" >
        <BlueBtn >
          Log Out
        </BlueBtn>
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
