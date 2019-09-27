import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Input, Icon, Typography, Form } from "antd";

const Container = styled.div`
  background-color: #c5dcd9;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const InnerDiv = styled.div`
  
  height: 70vh;
  flex-basis: 40vw;
  background-color: white;
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 250px 50px;
  border-radius: 0 10px 10px 0;
  @media (max-width: 1200px) {
    flex-basis: 100%;
    height: 100%;
    background-color: #c5dcd9;
  }
`;

const Image = styled.img`
  max-width: 100%;
  display: block;
  height: 70vh;
  width: 38.2%;
  border-radius: 10px 0 0 10px;
  object-fit: cover;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const BlueBtn = styled(Button)`
    background-color: #6FA0D0;
    border-radius: 10px;
    color: #fff;
    border: 2px solid #6FA0D0 !important;
    transition: background-color 0.5s;
    font-family: "Open Sans", sans-serif;

    &:hover{
      background-color: #fff;
      color:  #6FA0D0;
    }

    &:focus{
      background-color: #fff;
      color: #6FA0D0;
    }
`;

const Register = () => {
  return (
    <Container>
      <Image src="/images/rsz_school.jpg" alt="School" />
      <InnerDiv>
        
        <Link to="/new_user/school_staff">
          <BlueBtn type="primary" htmlType="submit">
            School Staff Member
          </BlueBtn>
        </Link>
        <Link to="/new_user/board_member">
          <BlueBtn type="primary" htmlType="submit">
            Board Member
          </BlueBtn>
        </Link>
        <div>
          <p>Already registered? </p>
          <Link to="/login">
            <BlueBtn htmlType="submit">Login here!</BlueBtn>
          </Link>
        </div>
      </InnerDiv>
    </Container>
  );
};

const mapStateToProps = state => {
  return {};
};
export default connect(
  mapStateToProps,
  {}
)(Register);
