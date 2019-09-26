import React from "react";
import { Button, Input, Icon, Typography, Form } from "antd";
import styled from "styled-components";
import { withFormik } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getLogin } from "../store/actions";

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

const BlueBtn = styled(Button)`
  background-color: #6fa0d0;
  border-radius: 10px;
  color: #fff;
  border: 2px solid #6fa0d0 !important;
  transition: background-color 0.5s;
  font-family: "Open Sans", sans-serif;

  &:hover {
    background-color: #fff;
    color: #6fa0d0;
  }

  &:focus {
    background-color: #fff;
    color: #6fa0d0;
  }
`;

const ErrorMessageBox = styled.div`
  color: red;
`;
const { Title } = Typography;

const C = props => {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors
  } = props;

  return (
    <Container>
      <Image
        style={{ objectFit: "cover" }}
        src="/images/rsz_school.jpg"
        alt="School"
      />
      <InnerDiv>
        <Title>International Rural School</Title>
        <form onSubmit={handleSubmit}>
          <Form.Item
            help={touched.username && errors.username ? errors.username : ""}
            validateStatus={
              touched.username && errors.username ? "error" : undefined
            }
          >
            <Input
              size="large"
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Username"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            />
          </Form.Item>
          <Form.Item
            help={touched.password && errors.password ? errors.password : ""}
            validateStatus={
              touched.password && errors.password ? "error" : undefined
            }
          >
            <Input.Password
              size="large"
              name="password"
              placeholder="Password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            />
          </Form.Item>
          <BlueBtn type="primary" htmlType="submit">
            Login
          </BlueBtn>
          <ErrorMessageBox>
            {props.getErrorMessage ? (
              <p>Error! Incorrect username or password</p>
            ) : null}
          </ErrorMessageBox>
        </form>

        <div>
          <p>Need to register? </p>
          <Link to="./new_user">
            <BlueBtn htmlType="submit">Register here!</BlueBtn>
          </Link>
        </div>
      </InnerDiv>
    </Container>
  );
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Please provide a name"),
  password: yup
    .string()
    .required("Please provide a password")
    .min(8, "Password too short")
});

const Login = withFormik({
  mapPropsToValues: () => ({ username: "", password: "" }),
  handleSubmit: (values, { props, setSubmitting }) => {
    console.log(values);
    props.getLogin(values, props);
    setSubmitting(false);
  },

  validationSchema: validationSchema
})(C);

const mapStateToProps = state => {
  console.log(state);
  return {
    getErrorMessage: state.getErrorMessage
  };
};

export default connect(
  mapStateToProps,
  { getLogin }
)(Login);
