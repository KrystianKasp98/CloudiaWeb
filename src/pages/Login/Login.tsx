import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { FormEvent } from 'react';
import { t } from 'i18next';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { AppContext } from '../../App/context/AppContext';
import { USER_LOGIN, USER_PASSWORD } from '../../consts';
import UsersApi from '../../Api/Users/Users';

import { CredentialsI } from './types';

const Login = () => {
  const [login, setLogin] = useState<string>(USER_LOGIN);
  const [password, setPassword] = useState<string>(USER_PASSWORD);
  const context = useContext(AppContext);

  const navigate = useNavigate();

  const handleLogin = async (
    event: FormEvent<HTMLFormElement>,
    credentials: CredentialsI
  ) => {
    event.preventDefault();
    try {
      const result = await UsersApi.login(credentials);
      console.log({ result });
      if (result) {
        context?.setCookie('authenticated', 'true', { maxAge: 3600 });
        navigate('/');
      }
    } catch (err) {
      console.error('failed to login, reason: ', err);
    }
  };

  useEffect(() => {
    if (context?.cookies?.authenticated) {
      console.log('it workis redirect');
      navigate('/');
    }
  }, []);

  return (
    <Container>
      <Row className="justify-content-center mt-5 mb-5">
        <Col lg={3}>
          <h1 className="text-center">Cloudia App</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col lg={3}>
          <Form onSubmit={e => handleLogin(e, { password, login })}>
            <Form.Group className="mb-3" controlId="login">
              <Form.Label>{t('login.form.login')}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t('login.form.loginPlaceholder')}
                onChange={e => setLogin(e.target.value)}
                value={login}
              />
              <Form.Text className="text-muted">
                {t('login.form.loginText')}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>{t('login.form.password')}</Form.Label>
              <Form.Control
                type="password"
                placeholder={t('login.form.passwordPlaceholder')}
                onChange={e => setPassword(e.target.value)}
                value={password}
              />
            </Form.Group>
            <Button
              variant={context?.darkMode ? 'light' : 'dark'}
              type="submit"
            >
              {t('login.form.signIn')}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
