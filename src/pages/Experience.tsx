import React from "react";
import Container from "react-bootstrap/Container";
import TitleSection from "../components/TitleSection";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OpenLink from "../components/OpenLink";

export default function Experience() {
    return (
        <Container fluid>
            <TitleSection style={{backgroundColor: "#EEEECC"}}>
                <Col md={4} className="my-auto">
                    <h1>Experience</h1>
                </Col>
                <Col md={4}/>
            </TitleSection>
            <Row className="justify-content-center text-content">
                <Col md={4} lg={{span: 4, order: 1}}>
                    <h2>Warner Music Group</h2>
                    <p>
                        Software Engineer II
                        <br/>
                        Sep 2023 - Present
                    </p>
                </Col>
                <Col md={4} lg={{span: 4, order: 2}}>
                    <p>
                        <OpenLink href="https://www.wmg.com/">WMG</OpenLink> is an American multinational entertainment and record label conglomerate. 
                    </p>
                    <p>
                        I work on the Digital Supply Chain, which is responsible for distributing music to the world, through partners like YouTube, Spotify, Apple Music, TikTok, and more!
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-center text-content">
                <Col md={4} lg={{span: 4, order: 1}}>
                    <h2>Ernst & Young</h2>
                    <p>
                        Staff Technology Consultant
                        <br/>
                        Jul 2021 - Jul 2022
                        <br/>
                        <br/>
                        Senior Technology Consultant
                        <br/>
                        Aug 2022 - Sep 2023
                    </p>
                </Col>
                <Col md={4} lg={{span: 4, order: 2}}>
                    <p>
                        <OpenLink href="https://www.ey.com/">EY</OpenLink> is a multinational professional services partnership.
                    </p>
                    <p>
                        I worked on a cloud implementation project for a multinational financial service company.
                        Specifically, I worked on migrating years of data into the cloud and converting them to fit the new data model.
                    </p>
                    <p>
                        I later worked on a platform implementation project for another multinational financial service company.
                        Specifically, I worked on building software that integrates the existing systems and the new platform. 
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-center text-content">
                <Col md={4} lg={{span: 4, order: 1}}>
                    <h2>University of Toronto</h2>
                    <p>
                        Teaching Assistant
                        <br/>
                        Sep 2019 - Apr 2021
                    </p>
                </Col>
                <Col md={4} lg={{span: 4, order: 2}}>
                    <p>
                    <OpenLink href="https://www.utoronto.ca/">UofT</OpenLink> is a public research university in Toronto.
                    </p>
                    <p>
                        I was teaching in the Department of Mathematics for close to 2 years.
                        I taught topics like mathematical proofs, linear algebra, calculus, differential equations.
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-center text-content">
                <Col md={4} lg={{span: 4, order: 1}}>
                    <h2>STEM Work</h2>
                    <p>
                        Teacher
                        <br/>
                        Summer 2018, Summer 2019
                    </p>
                </Col>
                <Col md={4} lg={{span: 4, order: 2}}>
                    <p>
                        STEM Work is an education center based in Hong Kong focused on STEM extracurricular education. 
                    </p>
                    <p>
                        I was a teacher there for 2 summers. Teaching kids programming, robotics, and some physics.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}
