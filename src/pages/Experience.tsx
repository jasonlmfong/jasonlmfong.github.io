import React from "react";
import Container from "react-bootstrap/Container";
import TitleSection from "../components/TitleSection";
import PageSection from "../components/PageSection";
import Col from "react-bootstrap/Col";
import OpenLink from "../components/OpenLink";
import {wmg, ey, uoft} from "../images/images";

export default function Experience() {
    return (
        <Container fluid>
            <TitleSection style={{backgroundColor: "#112244"}}>
                <Col md={4} className="my-auto">
                    <h1>Experience</h1>
                </Col>
                <Col md={4}/>
            </TitleSection>
            <PageSection style={{backgroundColor: "#223333"}}>
                <Col md={4} lg={{span: 4, order: 1}} className="my-auto" style={{textAlign: "center"}}>
                    <img src={wmg} style={{width: "80%"}} alt="logo"/>
                </Col>
                <Col md={4} lg={{span: 4, order: 2}} className="my-auto">
                    <h2>Warner Music Group</h2>
                    <p>
                        <OpenLink href="https://www.wmg.com/">WMG</OpenLink> is an American multinational entertainment and record label conglomerate. 
                    </p>
                    <p>
                        I work on the Digital Supply Chain, which is responsible for distributing music to the world, through partners like YouTube, Spotify, Apple Music, TikTok, and more!
                    </p>
                </Col>
            </PageSection>
            <PageSection style={{backgroundColor: "#222222"}}>
                <Col md={4} lg={{span: 4, order: 1}} className="my-auto" style={{textAlign: "center"}}>
                    <img src={ey} style={{width: "80%"}} alt="logo"/>
                </Col>
                <Col md={4} lg={{span: 4, order: 2}} className="my-auto">
                    <h2>Ernst & Young</h2>
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
            </PageSection>
            <PageSection style={{backgroundColor: "#223333"}}>
                <Col md={4} lg={{span: 4, order: 1}} className="my-auto" style={{textAlign: "center"}}>
                    <img src={uoft} style={{width: "80%"}} alt="logo"/>
                </Col>
                <Col md={4} lg={{span: 4, order: 2}} className="my-auto">
                    <h2>University of Toronto</h2>
                    <p>
                    <OpenLink href="https://www.utoronto.ca/">UofT</OpenLink> is a public research university.
                    </p>
                    <p>
                        I was teaching in the Department of Mathematics for 2 years.
                        I taught topics like mathematical proofs, linear algebra, calculus, differential equations.
                    </p>
                </Col>
            </PageSection>
        </Container>
    )
}
