import React from "react";
import SHOP_DATA from "./shop.data.js";
import Collection from "../../components/collection/collection.component.jsx"

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <section id="shopPage">
        <h1 className="sp-title padMeMore">Collections</h1>
        {
          collections.map(({ id, ...otherProps }) => (
            <Collection key={id} {...otherProps} />
          ))
        }
      </section>
    );
  }
}

export default ShopPage;
