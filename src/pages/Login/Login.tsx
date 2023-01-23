import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import type {FormEvent} from 'react';
import {USER_LOGIN, USER_PASSWORD} from '../../consts';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import UsersApi from '../../Api/Users/Users';
import {CredentialsI} from './types';

function Login() {
  const [login, setLogin] = useState<string>(USER_LOGIN);
  const [password, setPassword] = useState<string>(USER_PASSWORD);

  const navigate = useNavigate();

  const handleLogin = async (event: FormEvent<HTMLFormElement>, credentials: CredentialsI) => {
    event.preventDefault();
    try {
      const result = await UsersApi.login(credentials);
      console.log({result});
      if (result) {
        navigate('/', {state: {login: true}});
      }
    } catch (err) {
      console.error('failed to login, reason: ', err);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5 mb-5">
        <Col lg={3}>
          <h1>Cloudia App</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col lg={3}>
          <Form onSubmit={e => handleLogin(e, {password, login})}>
            <Form.Group className="mb-3" controlId="login">
              <Form.Label>Login</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter login"
                onChange={e => setLogin(e.target.value)}
                value={login}
              />
              <Form.Text className="text-muted">
                We'll never share your login with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
                value={password}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
