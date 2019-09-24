import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Input, Icon, Typography, Form } from 'antd';

const Container = styled.div`
  background-color: #c5dcd9;
  height: 92vh;
  width: 100vw;
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
  padding: 0 50px;
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
  @media (max-width: 1200px) {
    display: none;
  }
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
        <Link to="/new_user/school_staff">
          <StyledButton type="primary" htmlType="submit">
            School Staff Member
          </StyledButton>
        </Link>
        <Link to="/new_user/board_member">
          <StyledButton type="primary" htmlType="submit">
            Board Member
          </StyledButton>
        </Link>
        <div>
          <p>Already registered? </p>
          <Link to="/login">
            <StyledButton htmlType="submit">Login here!</StyledButton>
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
