import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import OpenLink from "./OpenLink";
import {linkedin_logo, github_logo} from "../images/images";

export default function MainFooter(props) {
    return (
        <Container fluid>
            <Row className="justify-content-md-center "
                 style={{minHeight: "30vh", backgroundColor: "#CCCCDD"}}>
                <Col md={4} className="my-auto">
                    <h2>Contact</h2>
                </Col>
                <Col md={4} className="my-auto">
                    <p style={{textAlign: "center"}}>
                        <OpenLink href="https://www.linkedin.com/in/jasonlmfong/">
                            <img src={linkedin_logo}
                                 alt="linkedin profile"
                                 style={{width: "64px"}}/>
                        </OpenLink>
                        {"\t"}
                        <OpenLink href="https://github.com/jasonlmfong">
                            <img src={github_logo}
                                 alt="github profile"
                                 style={{width: "64px"}}/>
                        </OpenLink>
                    </p>
                    <p style={{fontSize: "12px", textAlign: "center"}}>
                        Email: jasonlmfong[at]gmail[dot]com
                        <br/>
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
