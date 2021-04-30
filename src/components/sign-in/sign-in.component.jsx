import React from "react";
import { Form, Button } from "react-bootstrap";
import GoogleAuthButton from "../google-auth-button/google-auth-button.component.jsx";
import { signInWithGoogle, signInWithEmailAndPassword } from "../../firebase/firebase.utils.js";
import { withRouter } from "react-router-dom";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };

        this.history = props.history;

        this.emptyState = { ...this.state };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        const signInSuccess = await signInWithEmailAndPassword(email, password);

        if (signInSuccess) {
            alert("Sign in successful!");

            this.setState({ ...this.emptyState });

            this.history.push("/");
        } else {
            alert("Wrong email / password !");
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    gHandleClick = async event => {
        await signInWithGoogle();

        alert("Signed in successfully!");

        this.history.push("/");
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

export default withRouter(SignIn);
