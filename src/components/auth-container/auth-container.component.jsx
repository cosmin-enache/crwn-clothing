import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SignIn from "../sign-in/sign-in.component.jsx";

const AuthContainer = () => (
    <Container>
      <Row>
        <Col className="align-self-center" md={6}>
          <SignIn />
        </Col>
      </Row>
    </Container>
);

export default AuthContainer;
