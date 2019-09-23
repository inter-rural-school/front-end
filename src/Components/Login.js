import React from 'react';
import { Button, Input, Icon, Typography } from 'antd';
import styled from 'styled-components';

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
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 50px;
`;

const StyledButton = styled(Button)`
  font-family: 'Open Sans', sans-serif;
`;
const { Title } = Typography;

const Login = () => {
  return (
    <Container>
      <img height="70%" src="/images/rsz_school.jpg" alt="School" />
      <InnerDiv>
        <Title>International Rural School</Title>
        <Input
          size="large"
          placeholder="Username"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        />
        <Input.Password
          placeholder="Password"
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        />
        <StyledButton type="primary">Login</StyledButton>
      </InnerDiv>
    </Container>
  );
};

export default Login;
