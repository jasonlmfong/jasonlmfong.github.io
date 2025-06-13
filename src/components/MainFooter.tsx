import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import OpenLink from "./OpenLink";
import {linkedin_logo, github_logo} from "../images/images";

export default function MainFooter(props) {
    return (
        <Container fluid>
            <Row className="justify-content-md-center"
                 style={{minHeight: "15vh", backgroundColor: "#112244"}}>
                <Col md={4} className="my-auto">
                    <h2>Contact</h2>
                </Col>
                <Col md={4} className="my-auto">
                    <div style={{margin: 15}}>
                        <p style={{textAlign: "center"}}>
                            <OpenLink href="https://www.linkedin.com/in/jasonlmfong/">
                                <img src={linkedin_logo}
                                    alt="linkedin profile"
                                    style={{width: "32px"}}/>
                            </OpenLink>
                            {"\t"}
                            <OpenLink href="https://github.com/jasonlmfong">
                                <img src={github_logo}
                                    alt="github profile"
                                    style={{width: "32px"}}/>
                            </OpenLink>
                        </p>
                        <p style={{fontSize: "12px", textAlign: "center", lineHeight: "normal"}}>
                            Email: jasonlmfong[at]gmail[dot]com
                            <br/>
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
