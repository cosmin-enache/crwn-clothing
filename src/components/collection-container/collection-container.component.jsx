import React from "react";
import Collection from "../collection/collection.component.jsx"
import { connect } from "react-redux";

const CollectionContainer = ({ collections, match }) => {
    const { collectionId } = match.params;
    let foundCollection;

    if (collectionId) {
        foundCollection = collections.find(collection => collection.title.toLowerCase() === collectionId)
    }

    return(
        <React.Fragment>
            {
                foundCollection ? (
                    [ foundCollection ].map(props => (
                        <Collection
                            key={props.id}
                            {...props}
                            />
                    ))
                ) : (
                    collections.map(props => (
                        <Collection
                            key={props.id}
                            preview
                            {...props}
                            />
                    ))
                )
            }
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    collections: state.shop.collections
});

export default connect(mapStateToProps)(CollectionContainer);
