import React, { Component, Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component.jsx";

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import AuthPage from './pages/authentication/authentication.component.jsx'

import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js";

const HatsPage = (props) => {
    return (
        <h1>Hats Page!</h1>
    );
}

class App extends Component {
    constructor() {
        super();

        this.handleAuthSubscription = null;

        this.state = {
            currentUser: null
        };
    }

    componentDidMount() {
        this.handleAuthSubscription = auth.onAuthStateChanged(async user => {
            if (user) {
                const userRef = await createUserProfileDocument(user);
                const userSnapshot = await userRef.get();

                const { id } = userSnapshot;

                await this.setState({ currentUser: {
                    id: id,
                    ...userSnapshot.data()
                }});
            } else {
                this.setState({ currentUser: null });
            }
        });
    }

    componentWillUnmount() {
        this.handleAuthSubscription();
    }

    render() {
        return (
            <Fragment>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/hats" component={HatsPage} />
                    <Route exact path="/shop" component={ShopPage} />
                    <Route exact path="/user-auth" component={AuthPage} />
                </Switch>
            </Fragment>
        );
    }
}

export default App;
