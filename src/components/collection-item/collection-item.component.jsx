import React from "react";
import { Col } from "react-bootstrap";

const CollectionItem = ({ name, imageUrl, price}) => (
  <Col
    xs={12}
    md={6}
    lg={4}
    xl={3}
    className="padMore"
  >
    <article className="collection-item">
      <div className="bg-img-container">
        <button>ADD TO CART</button>
        <img className="bg-img" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="price">${price}</span>
    </article>
  </Col>
);

export default CollectionItem;
