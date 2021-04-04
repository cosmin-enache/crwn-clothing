import React from "react";
import CollectionItem from "../collection-item/collection-item.component.jsx";
import { Container, Row, Col } from "react-bootstrap";

const Collection = ({ title, items }) => (
  <Container fluid className="collection-preview">
    <Row>
      <Col xs={12} className="padMore">
        <h1 className="preview-title">{title.toUpperCase()}</h1>
      </Col>
      {
        items.reduce((a, { id, ...otherProps }, i) => {
          i < 4 && a.push(
            <CollectionItem key={id} {...otherProps} />
          );
          return a;
        }, [])
      }
    </Row>
  </Container>
);

export default Collection;
