import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Input, Icon, Typography, Form } from 'antd';

const Container = styled.div`
  background-color: #c5dcd9;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const InnerDiv = styled.div`
  height: 70vh;
  width: 30vw;
  background-color: white;
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 50px;
  border-radius: 0 10px 10px 0;
`;

const Image = styled.img`
  height: 70%;
  border-radius: 10px 0 0 10px;
`;
const StyledButton = styled(Button)`
  font-family: 'Open Sans', sans-serif;
`;
const Register = () => {
  return (
    <Container>
      <Image src="/images/rsz_school.jpg" alt="School" />
      <InnerDiv>
        <p>I am a </p>
        <Link to="./new_user/school_staff">
          <StyledButton>School Staff Member</StyledButton>
        </Link>
        <Link to="./new_user/board_member">
          <StyledButton>Board Member</StyledButton>
        </Link>
        <p>Already registered? </p> <Link to="./login">Login Here!</Link>
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
