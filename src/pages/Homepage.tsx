import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import PageSection from "../components/PageSection";
import Col from "react-bootstrap/Col";
import {tucker, bob} from "../images/images";

export default function Homepage() {
    return (
        <Container fluid>
            <PageSection style={{minHeight: "80vh"}}>
                <Col md={5} lg={{span: 4, order: 1}} className="my-auto" style={{textAlign: "center"}}>
                    <img src={tucker} style={{width: "80%", borderRadius: "50%"}} alt="me and my neighbour's cat, Tucker"/>
                </Col>
                <Col md={5} lg={{span: 4, order: 2}} className="my-auto">
                    <h1>Hey! I'm Jason</h1>
                    <p>
                        I'm a software engineer, open-source contributor, and I sometimes moonlight as a data scientist.
                        <br/>
                        <br/>
                        My experiences span distributed systems, microservices, CI/CD pipelines, full stack development, data engineering.
                        <br/>
                        <br/>
                        I like geometry processing, databases, compilers, and abstract algebra.
                    </p>
                </Col>
            </PageSection>
        </Container>
    )
}
