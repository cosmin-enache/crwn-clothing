import React from "react"
import { Col } from "react-bootstrap"

const MenuItem = ({ title, layoutLarge, imageUrl }) => {
    return (
        <Col
            md={6}
            lg={layoutLarge ? 6 : 4}
            className="text-center"
        >
            <div
                className={`menu-item ${layoutLarge && "lg"}`}
            >
                <img src={imageUrl} />
                <div className="content">
                    <h1 className="title">{title}</h1>
                    <span className="sub-title">SHOP NOW</span>
                </div>
            </div>
        </Col>
    );
};

export default MenuItem;
