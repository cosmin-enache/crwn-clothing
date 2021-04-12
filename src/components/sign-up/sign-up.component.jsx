import React from "react";
import { Form, Button } from "react-bootstrap";
import { auth, createUserProfileDocument, signInWithEmailAndPassword } from "../../firebase/firebase.utils.js";
import { withRouter } from "react-router-dom";

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        };

        this.history = props.history;

        this.emptyState = { ...this.state };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { username, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            const userData = { ...user, displayName: username };

            await createUserProfileDocument(userData);

            await signInWithEmailAndPassword(email, password);

            this.setState({ ...this.emptyState });

            alert("Account successfully created!");

            this.history.push("/");
        } catch (error) {
            console.log(error.message);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <React.Fragment>
                <div className="sign-up-container">
                    <h2 className="font-weight-bold">I do not have an account</h2>
                    <span style={{color: "black"}}>Sign up for an account</span>
                    <Form id="sign-in-form" onSubmit={this.handleSubmit}>
                        <Form.Group controlId="username-field">
                            <Form.Label className="field-label">Username</Form.Label>
                            <Form.Control
                                size="lg"
                                className="form-input"
                                name="username"
                                type="text"
                                placeholder="Enter username"
                                value={this.state.username}
                                onChange={this.handleChange}
                                required
                                />
                        </Form.Group>
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
                                value={this.state.password}
                                placeholder="Enter password"
                                onChange={this.handleChange}
                                required
                                />
                        </Form.Group>
                        <Form.Group controlId="confirm-password-field">
                            <Form.Label className="field-label">Confirm Password</Form.Label>
                            <Form.Control
                                size="lg"
                                className="form-input"
                                name="confirmPassword"
                                type="password"
                                value={this.state.confirmPassword}
                                placeholder="Confirm Password"
                                onChange={this.handleChange}
                                required
                                />
                        </Form.Group>
                        <Button className="styled-button" size="lg" variant="dark" type="submit">
                            SIGN UP
                        </Button>
                    </Form>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(SignUp);
