import React from "react";
import { Form, Button } from "react-bootstrap";
import GoogleAuthButton from "../google-auth-button/google-auth-button.component.jsx";
import { signInWithGoogle } from "../../firebase/firebase.utils.js";

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

    gHandleClick = event => {
        signInWithGoogle();
    }

    render() {
        return (
            <React.Fragment>
                <div className="sign-in-container">
                    <h2 className="font-weight-bold">I already have an account</h2>
                    <span style={{color: "black"}}>Sign in with your email and password</span>
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
                        </Form.Group>
                        <Form.Group controlId="password-field">
                            <Form.Label className="field-label">Password</Form.Label>
                            <Form.Control
                                size="lg"
                                className="form-input"
                                name="password"
                                type="password"
                                value={this.state.password}
                                placeholder="Enter password"
                                onChange={this.handleChange}
                                required
                                />
                        </Form.Group>
                        <Button className="styled-button" size="lg" variant="dark" type="submit">
                            SIGN IN
                        </Button>
                        <GoogleAuthButton gHandleClick={this.gHandleClick} />
                    </Form>
                </div>
            </React.Fragment>
        );
    }
}

export default SignIn;
