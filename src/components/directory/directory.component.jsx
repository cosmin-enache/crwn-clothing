import React from "react"
import { Container, Row } from "react-bootstrap"
import MenuItem from "../menu-item/menu-item.component.jsx"
import { connect } from "react-redux";

const Directory = ({ sections }) => (
    <Container fluid>
        <Row className="dirMenu">
            {
                sections.reduce((a, sectionProps, i) => {
                    a.push(
                        <MenuItem
                            key={i}
                            {...sectionProps}
                            />
                    );
                    return a;
                }, [])
            }
        </Row>
    </Container>
)

const mapStateToProps = state => ({
    sections: state.directory.dirSections
});

export default connect(mapStateToProps)(Directory);
