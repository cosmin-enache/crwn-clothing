import React from "react";
import Button from "react-bootstrap/Button";

const GoogleAuthButton = ({ gHandleClick, ...otherProps }) => (
    <Button
        className="styled-button google"
        onClick={gHandleClick}
        { ...otherProps }
        >
        GOOGLE SIGN IN
    </Button>
);

export default GoogleAuthButton;
