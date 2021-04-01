import React from "react"
import { Container, Row } from "react-bootstrap"
import MenuItem from "../menu-item/menu-item.component.jsx"

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: "HATS",
                    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
                    layoutLarge: false
                },
                {
                    title: "JACKETS",
                    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
                    layoutLarge: false
                },
                {
                    title: "SNICKERS",
                    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
                    layoutLarge: false
                },
                {
                    title: "MEN",
                    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
                    layoutLarge: true
                },
                {
                    title: "WOMEN",
                    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
                    layoutLarge: true
                }
            ]
        };
    }
    render() {
        const sections = this.state.sections;

        return(
            <Container fluid>
                <Row className="dirMenu">
                    {
                        sections.reduce((a, { title, imageUrl, layoutLarge }, i) => {
                            a.push(
                                <MenuItem
                                    key={i}
                                    title={title}
                                    imageUrl={imageUrl}
                                    layoutLarge={layoutLarge}
                                />
                            );

                            return a;
                        }, [])
                    }
                </Row>
            </Container>
        );
    }
}

export default Directory;
