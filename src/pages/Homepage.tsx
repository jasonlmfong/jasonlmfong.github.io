import React from "react";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import PageSection from "../components/PageSection";
import Col from "react-bootstrap/Col";
import {tucker, bob} from "../images/images";

export default function Homepage() {
    return (
        <Container fluid>
            <PageSection style={{backgroundColor: "#223333"}}>
                <Col md={5} lg={{span: 4, order: 1}} className="my-auto">
                    <h1>Hey! I'm Jason</h1>
                    <p>
                        I am a software engineer based in Toronto.
                        <br/>
                        I like geometry, computer graphics, video games, music, movies, reading, memes, and all kinds of things.
                    </p>
                </Col>
                <Col md={5} lg={{span: 4, order: 2}} className="my-auto" style={{textAlign: "center"}}>
                    <img src={tucker} style={{width: "80%"}} alt="me and my neighbour's cat, Tucker"/>
                </Col>
            </PageSection>
            <PageSection style={{backgroundColor: "#222222"}}>
                <Col md={4} lg={{span: 4, order: 1}} className="my-auto" style={{textAlign: "center"}}>
                    <img src={bob} style={{width: "80%"}} alt="'Bob' mesh"/>
                </Col>
                <Col md={4} lg={{span: 4, order: 2}} className="my-auto">
                    <p>
                        Most of my time is spent coding something, playing an RPG, reading science fiction, or playing with my pets.
                        <br/>
                        <Link to="/projects" push="true">My projects!</Link>
                    </p>
                </Col>
            </PageSection>
        </Container>
    )
}
