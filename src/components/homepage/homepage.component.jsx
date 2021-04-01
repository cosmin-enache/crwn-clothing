import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const HomePage = () => {
    return (
        <Container id="homePage">
            <Row className="dirMenu g-0">
                <Col md={6} lg={4} className="text-center">
                    <div className="menu-item">
                        <div className="content">
                            <h1 className="title">HATS</h1>
                            <span className="sub-title">SHOP NOW</span>
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={4} className="text-center">
                    <div className="menu-item">
                        <div className="content">
                            <h1 className="title">JACKETS</h1>
                            <span className="sub-title">SHOP NOW</span>
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={4} className="text-center">
                    <div className="menu-item">
                        <div className="content">
                            <h1 className="title">SNEAKERS</h1>
                            <span className="sub-title">SHOP NOW</span>
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={6} className="text-center">
                    <div className="menu-item lg">
                        <div className="content">
                            <h1 className="title">MENS</h1>
                            <span className="sub-title">SHOP NOW</span>
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={6} className="text-center">
                    <div className="menu-item lg">
                        <div className="content">
                            <h1 className="title">WOMENS</h1>
                            <span className="sub-title">SHOP NOW</span>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;
