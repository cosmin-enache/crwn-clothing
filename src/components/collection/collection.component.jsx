import React from "react";
import CollectionItem from "../collection-item/collection-item.component.jsx";
import { Container, Row, Col } from "react-bootstrap";

const Collection = ({ title, items, preview }) => (
    <Container fluid className="collection-preview">
        <Row>
            <Col xs={12} className="padMore">
                <h1 className="preview-title">{title.toUpperCase()}</h1>
            </Col>
            {
                items.reduce((a, props, i) => {
                    if (preview) {
                        if (i < 4) {
                            a.push(
                                <CollectionItem key={props.id} {...props} />
                            );
                        }
                    } else {
                        a.push(
                            <CollectionItem key={props.id} {...props} />
                        );
                    }
                    return a;
                }, [])
            }
        </Row>
    </Container>
);

export default Collection;
