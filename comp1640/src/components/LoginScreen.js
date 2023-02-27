import React from "react";
import greenwich from "../assets/images/greenwich.png";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, FormGroup } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

const LoginScreen = () => {
  const navigate = useNavigate();
  return (
    <Container className='small-container'>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <div className='text-center'>
        <img style={{ width: 230, height: 150 }} src={greenwich} />
      </div>
      <h1 className='text-center'>Welcome back,admin!</h1>
      <Form>
        <FormGroup className='p-3' controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control size='lg' type='email' required />
        </FormGroup>
        <FormGroup className='p-3' controlId='password'>
          <Form.Label>Email</Form.Label>
          <Form.Control size='lg' type='password' required />
        </FormGroup>
        <div className='text-center'>
          <Button
            size='lg'
            className='m-3 p-3 mb-4 '
            onClick={() => {
              navigate("/home");
            }}
          >
            Sign in
          </Button>
        </div>
      </Form>
    </Container>
  );
};
export default LoginScreen;
