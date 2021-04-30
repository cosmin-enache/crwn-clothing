import React from "react";
import { Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, layoutLarge, imageUrl, history, linkUrl }) => {
    return (
        <Col
            md={6}
            lg={layoutLarge ? 6 : 4}
            className="text-center"
        >
            <div
                onClick={() => history.push("/shop/" + linkUrl)}
                className={`menu-item ${layoutLarge && "lg"}`}
            >
                <img src={imageUrl} alt="menu item" />
                <div className="content">
                    <h1 className="title">{title}</h1>
                    <span className="sub-title">SHOP NOW</span>
                </div>
            </div>
        </Col>
    );
};

export default withRouter(MenuItem);
