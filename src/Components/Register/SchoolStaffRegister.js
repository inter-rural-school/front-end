import React from 'react';
import { Button, Input, Icon, Typography, Form } from 'antd';
import styled from 'styled-components';
import { withFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

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
  height: 80vh;
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
  height: 80vh;
  width: 38.2%;
  border-radius: 10px 0 0 10px;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const StyledButton = styled(Button)`
  font-family: 'Open Sans', sans-serif;
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
      <Image src="/images/rsz_school.jpg" alt="School" />
      <InnerDiv>
        <Title>Register as School Staff</Title>
        <form onSubmit={handleSubmit}>
          <Form.Item
            help={touched.name && errors.name ? errors.name : ''}
            validateStatus={touched.name && errors.name ? 'error' : undefined}
          >
            <Input
              size="large"
              name="first_name"
              value={values.first_name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="First Name"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            />
          </Form.Item>
          <Form.Item
            help={touched.name && errors.name ? errors.name : ''}
            validateStatus={touched.name && errors.name ? 'error' : undefined}
          >
            <Input
              size="large"
              name="last_name"
              value={values.last_name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Last Name"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            />
          </Form.Item>
          <Form.Item
            help={touched.email && errors.email ? errors.email : ''}
            validateStatus={touched.email && errors.email ? 'error' : undefined}
          >
            <Input
              size="large"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email"
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
            />
          </Form.Item>

          <Form.Item
            help={touched.username && errors.username ? errors.username : ''}
            validateStatus={
              touched.username && errors.username ? 'error' : undefined
            }
          >
            <Input
              size="large"
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Username"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            />
          </Form.Item>

          <Form.Item
            help={touched.password && errors.password ? errors.password : ''}
            validateStatus={
              touched.password && errors.password ? 'error' : undefined
            }
          >
            <Input.Password
              size="large"
              name="password"
              placeholder="Password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            />
          </Form.Item>

          {/* <Form.Item
            help={touched.password2 && errors.password2 ? errors.password2 : ''}
            validateStatus={
              touched.password2 && errors.password2 ? 'error' : undefined
            }
          >
            <Input.Password
              size="large"
              name="password2"
              placeholder="Confirm Password"
              value={values.password2}
              onBlur={handleBlur}
              onChange={handleChange}
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            />
          </Form.Item> */}
          <StyledButton type="primary" htmlType="submit">
            Register
          </StyledButton>
        </form>
      </InnerDiv>
    </Container>
  );
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Please provide a username'),
  first_name: yup
    .string()
    .required('Please provide your first name')
    .min(2, 'Name is too short'),
  last_name: yup
    .string()
    .required('Please provide your last name')
    .min(2, 'Name is too short'),
  email: yup
    .string()
    .email('Email is not valid')
    .required('Please provide an email'),
  password: yup
    .string()
    .required('Please provide a password')
    .min(8, 'Password too short')
  // password2: yup
  //   .string()
  //   .required('Confirm password')
  //   .oneOf([yup.ref('password'), null], 'Passwords must match')
});

const RegisterAction = info => {
  console.log(info);
  axiosWithAuth()
    .post('/register', info)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};

const SchoolStaffRegister = withFormik({
  mapPropsToValues: () => ({
    first_name: '',
    last_name: '',
    password: '',
    email: '',
    username: '',
    isBoardMember: 0
  }),
  handleSubmit: (values, { setSubmitting }) => {
    console.log(values);
    RegisterAction(values);
    setSubmitting(false);
  },
  validationSchema: validationSchema
})(C);

const mapStateToProps = state => {
  return {};
};
export default connect(
  mapStateToProps,
  {}
)(SchoolStaffRegister);
