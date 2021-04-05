import React from "react";
import { Form, Button } from "react-bootstrap";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      email: "",
      password: ""
    });
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="font-weight-bold">I already have an account</h2>
        <span>Sign in with your email and password</span>
          <Form id="sign-in-form" onSubmit={this.handleSubmit}>
            <Form.Group controlId="email-field">
              <Form.Label className="field-label">Email address</Form.Label>
              <Form.Control
                size="lg"
                className="form-input"
                name="email"
                type="email"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="password-field">
              <Form.Label className="field-label">Password</Form.Label>
              <Form.Control
                size="lg"
                className="form-input"
                name="password"
                type="password"
                placeholder="Enter password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
            </Form.Group>
            <Button className="styled-button" size="lg" variant="dark" type="submit">
              SIGN IN
            </Button>
            <Button style={{float: "right"}} className="styled-button" variant="primary" size="lg" type="submit">
              SIGN IN WITH GOOGLE
            </Button>
          </Form>
      </React.Fragment>
    );
  }
}

export default SignIn;
