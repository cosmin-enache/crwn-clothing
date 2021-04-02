import React, { Fragment } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from "react-router-dom";

const HatsPage = (props) => {
    return (
        <h1>Hats Page!</h1>
    );
}

function App() {
  return (
    <Fragment>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/hats" component={HatsPage} />
            <Route path="/hats/:hatId" component={HatsPage} />
        </Switch>
    </Fragment>
  );
}

export default App;
