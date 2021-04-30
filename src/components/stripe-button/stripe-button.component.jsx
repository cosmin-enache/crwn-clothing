import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { clearCartItems } from "../../redux/cart/cart-action.js";
import { connect } from "react-redux";

const StripeButton = ({ price, clearCartItems }) => {
    const priceInCents = price * 100;
    const publishableKey = "pk_test_51Im0YeKdofGPjn3TQW9Vs20I86R3xWINpAqn1DT3WvInShZYQFzVE2peJunUR4NzgJpnCIEX9mjhSRbwdjd1Dtng00BX0XTDpU";

    const onToken = token => {
        clearCartItems();
        console.log(token);
        alert("Payment successful!");
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceInCents}
            panelLabel={`Pay Now `}
            token={onToken}
            stripeKey={publishableKey}
            />
    );
};

const mapDispatchToProps = dispatch => ({
    clearCartItems: () => dispatch(clearCartItems())
});

export default connect(null, mapDispatchToProps)(StripeButton);
