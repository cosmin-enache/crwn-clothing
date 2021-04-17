import React from "react";
import SHOP_DATA from "./shop.data.js";
import Collection from "../collection/collection.component.jsx"

class CollectionContainer extends React.Component {
  constructor() {
    super();
    console.log(SHOP_DATA);
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const { collections } = this.state;

    return (
      <React.Fragment>
        {
          collections.map(props => (

            <Collection key={props.id} {...props} />
          ))
        }
      </React.Fragment>
    );
  }
}

export default CollectionContainer;
