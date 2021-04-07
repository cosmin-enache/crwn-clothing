import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SignIn from "../sign-in/sign-in.component.jsx";
import SignUp from "../sign-up/sign-up.component.jsx";

const AuthContainer = () => (
    <Container>
        <Row>
            <Col className="align-self-center" xs={12} lg={6}>
                <SignIn />
            </Col>
            <Col className="align-self-center" xs={12} lg={6}>
                <SignUp />
            </Col>
        </Row>
    </Container>
);

export default AuthContainer;
