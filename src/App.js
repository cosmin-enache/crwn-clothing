import React, { Component, Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header/header.component.jsx";

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import AuthPage from './pages/authentication/authentication.component.jsx'
import CheckoutPage from './pages/checkout/checkout.component.jsx';

import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js";

import  { setCurrentUser } from "./redux/user/user-action.js";
import { connect } from "react-redux";

class App extends Component {
    constructor(props) {
        super(props);

        this.handleAuthSubscription = null;
    }

    componentDidMount() {
        const { setCurrentUser } = this.props;

        this.handleAuthSubscription = auth.onAuthStateChanged(async user => {
            if (user) {
                const userRef = await createUserProfileDocument(user);
                const userSnapshot = await userRef.get();

                const { id } = userSnapshot;

                await setCurrentUser({
                    id: id,
                    ...userSnapshot.data()
                });
            } else {
                setCurrentUser(null);
            }
        });
    }

    componentWillUnmount() {
        this.handleAuthSubscription();
    }

    render() {
        return (
            <Fragment>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" render={() => <ShopPage />} />
                    <Route path="/user-auth" render={() => this.props.currentUser ? <Redirect to="/" /> : <AuthPage />} />
                    <Route path="/checkout" render={() => <CheckoutPage /> } />
                </Switch>
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
