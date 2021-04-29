import React from "react";
import CollectionContainer from "../../components/collection-container/collection-container.component.jsx"
import { Route, withRouter } from "react-router-dom";

const ShopPage = ({ match }) => {
    return (
        <section id="shopPage">
            <h1 className="sp-title padMeMore">Collections</h1>
            <Route exact path={match.path} component={CollectionContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionContainer} />
        </section>
    );
}

export default withRouter(ShopPage);
