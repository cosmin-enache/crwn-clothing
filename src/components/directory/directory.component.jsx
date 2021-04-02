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
                    layoutLarge: false,
                    linkUrl: "hats"
                },
                {
                    title: "JACKETS",
                    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
                    layoutLarge: false,
                    linkUrl: "hats"
                },
                {
                    title: "SNICKERS",
                    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
                    layoutLarge: false,
                    linkUrl: "hats"
                },
                {
                    title: "MEN",
                    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
                    layoutLarge: true,
                    linkUrl: "hats"
                },
                {
                    title: "WOMEN",
                    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
                    layoutLarge: true,
                    linkUrl: "hats"
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
        );
    }
}

export default Directory;
