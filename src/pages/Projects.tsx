import React from "react";
import Container from "react-bootstrap/Container";
import TitleSection from "../components/TitleSection";
import PageSection from "../components/PageSection";
import Col from "react-bootstrap/Col";
import OpenLink from "../components/OpenLink";
import {model, geo, ray_trace_2, draw_recog} from "../images/images";

export default function Projects() {
    return (
        <Container fluid>
            <TitleSection>
                <Col md={4} className="my-auto">
                    <h1>Projects</h1>
                </Col>
                <Col md={4}/>
            </TitleSection>
            <PageSection style={{backgroundColor: "#223333"}}>
                <Col md={4} lg={{span: 4, order: 1}} className="my-auto">
                    <h2>Model Modifier</h2>
                    <p>
                        3D Mesh viewer with various shading options, along with multiple subdivision algorithms:
                        <ul>
                            <li>
                                Catmull-Clark subdivision
                            </li>
                            <li>
                                Doo-Sabin subdivision
                            </li>
                            <li>
                                Loop subdivision
                            </li>
                        </ul>
                    </p>
                    <p>
                        <OpenLink href="https://github.com/jasonlmfong/Model-Modifier">Source code</OpenLink>
                    </p>
                </Col>
                <Col md={4} lg={{span: 4, order: 2}} className="my-auto" style={{textAlign: "center"}}>
                    <img src={model} style={{width: "80%"}} alt="Armadillo Mesh"/>
                </Col>
            </PageSection>
            <PageSection style={{backgroundColor: "#222222"}}>
                <Col md={4} lg={{span: 4, order: 1}} className="my-auto" style={{textAlign: "center"}}>
                    <img src={geo} style={{width: "80%"}} alt="Sample Generated Terrain"/>
                </Col>
                <Col md={4} lg={{span: 4, order: 2}} className="my-auto">
                    <h2>GeoGraphix</h2>
                    <p>
                        Terrain generator that supports multiple modes of terrain generation:
                        <ul>
                            <li>
                                uniform random
                            </li>
                            <li>
                                flat
                            </li>
                            <li>
                                diamond square algorithm
                            </li>
                            <li>
                                perlin noise algorithm
                            </li>
                            <li>
                                simplex noise algorithm
                            </li>
                        </ul>
                    </p>
                    <p>
                        <OpenLink href="https://github.com/Ore-Software/GeoGraphix">Source code</OpenLink>
                    </p>
                </Col>
            </PageSection>
            <PageSection style={{backgroundColor: "#223333"}}>
                <Col md={4} lg={{span: 4, order: 1}} className="my-auto">
                    <h2>Ray Tracer</h2>
                    <p>
                        Use ray tracing algorithm and principles of physics based rendering to render various features like: 
                        <br/>
                        lighting, spheres, boxes, materials, and image textures. 
                        <br/>
                        With additional support for Bounding Volume Heirarchy, instancing, and anti-aliasing.
                    </p>
                    <p>
                        <OpenLink href="https://github.com/jasonlmfong/Ray-Tracer">Source code</OpenLink>
                    </p>
                </Col>
                <Col md={4} lg={{span: 4, order: 2}} className="my-auto" style={{textAlign: "center"}}>
                    <img src={ray_trace_2} style={{width: "80%"}} alt="Sample Ray Traced Scene"/>
                </Col>
            </PageSection>
            <PageSection style={{backgroundColor: "#222222"}}>
                <Col md={4} lg={{span: 4, order: 1}} className="my-auto" style={{textAlign: "center"}}>
                    <img src={draw_recog} style={{width: "80%"}} alt="Robot Thinking About Sketches"/>
                </Col>
                <Col md={4} lg={{span: 4, order: 2}} className="my-auto">
                    <h2>Drawing Recognition</h2>
                    <p>
                        A drawing app like Paint, with a Keras model trained on sketch data to guess what the user drew.
                    </p>
                </Col>
            </PageSection>
        </Container>
    );
}
