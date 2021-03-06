import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 76px;
  width: 100vw;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 10000;

@media screen and (min-width: 1200px){
  padding: 1.5rem 1rem 0.5rem 1.5rem;
    }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
`;

const BlueBtn = styled(Button)`
  background-color: #6fa0d0;
  border-radius: 10px;
  color: #fff;
  border: 2px solid #6fa0d0 !important;
  transition: background-color 0.5s;
  margin: 0 10px;
  &:hover {
    background-color: #fff;
    color: #6fa0d0;
  }

  &:focus {
    background-color: #fff;
    color: #6fa0d0;
  }
`;

const Greeting = styled.p`
    margin: 0 auto;
    font-size: 1.25rem;
`;

const BigTitle = styled.h1`
    display: none;
  @media screen and (min-width: 1200px){
    display: block;
}
`;
const Header = (props) => {
  

  return (
    <Div className="HeaderContainer">
      <img src="/images/logo.png" alt="logo" width="50px" />
      <BigTitle>International Rural School</BigTitle>
     { localStorage.getItem("token") ?(
      <Info> 
        <Greeting>Hi! {props.userInfo.first_name}</Greeting>
        
        <Link
          to="/"
          onClick={() => {
            localStorage.removeItem("token");
            
          }}
        >
          <BlueBtn>Log Out</BlueBtn>
        </Link>
      
      </Info>
       ):<div></div>}  
    </Div>
  );
};

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo,
    isLogined:state.isLogined,
  };
};
export default connect(
  mapStateToProps,
  {}
)(Header);
