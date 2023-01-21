import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Login() {
  return (
    <Container>
      <Row className="justify-content-md-center mt-5 mb-5">
        <Col xs={3}>
          <h1>Cloudia App</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={3}>
          <Form>
            <Form.Group className="mb-3" controlId="login">
              <Form.Label>Login</Form.Label>
              <Form.Control type="email" placeholder="Enter login" />
              <Form.Text className="text-muted">
                We'll never share your login with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
