import React, { Component, Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component.jsx";

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import AuthPage from './pages/authentication/authentication.component.jsx'

import { auth } from "./firebase/firebase.utils.js";

const HatsPage = (props) => {
    return (
        <h1>Hats Page!</h1>
    );
}

class App extends Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        };
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            if (user) {
                this.setState({ currentUser: user });
            } else {
                this.setState({ currentUser: null });
            }
        });
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
