import Container from "react-bootstrap/Container";
import TitleSection from "../components/TitleSection";
import PageSection from "../components/PageSection";
import Col from "react-bootstrap/Col";
import OpenLink from "../components/OpenLink";
import {stm, model, geo, ray_trace_2, draw_recog, sqliter} from "../images/images";

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
                <Col md={4} lg={{span: 4, order: 1}} className="my-auto" style={{textAlign: "center"}}>
                    <img src={model} style={{width: "80%"}} alt="Armadillo Mesh"/>
                </Col>
                <Col md={4} lg={{span: 4, order: 2}} className="my-auto">
                    <h2>Model Modifier</h2>
                    <p>
                        3D Mesh viewer
                        <ul>
                            <li>
                                Implements various subdivion algorithms
                            </li>
                            <li>
                                Custom .obj file parser
                            </li>
                            <li>
                                CMake build system
                            </li>
                            <li>
                                Interactive camera controls and visualization options
                            </li>
                        </ul>
                    </p>
                    <p>
                        <OpenLink href="https://github.com/jasonlmfong/Model-Modifier">Source code</OpenLink>
                    </p>
                </Col>
            </PageSection>
            <PageSection style={{backgroundColor: "#222222"}}>
                <Col md={4} lg={{span: 4, order: 1}} className="my-auto" style={{textAlign: "center"}}>
                    <img src={stm} style={{width: "80%"}} alt="Armadillo Mesh"/>
                </Col>
                <Col md={4} lg={{span: 4, order: 2}} className="my-auto">
                    <h2>RustM32</h2>
                    <p>
                        Embedded programs for the STM32F103 microcontroller
                        <ul>
                            <li>
                                Supports various peripherals using GPIO
                            </li>
                            <li>
                                Leverages HAL for hardware control and real time data processing
                            </li>
                        </ul>
                    </p>
                    <p>
                        <OpenLink href="https://github.com/jasonlmfong/rustM32">Source code</OpenLink>
                    </p>
                </Col>
            </PageSection>
            <PageSection style={{backgroundColor: "#223333"}}>
                <Col md={4} lg={{span: 4, order: 1}} className="my-auto" style={{textAlign: "center"}}>
                    <img src={sqliter} style={{width: "80%"}} alt="Armadillo Mesh"/>
                </Col>
                <Col md={4} lg={{span: 4, order: 2}} className="my-auto">
                    <h2>SQLiter</h2>
                    <p>
                        Relational database engine
                        <ul>
                            <li>
                                Supports core SQL commands
                            </li>
                            <li>
                                Equipped with custom query parser
                            </li>
                            <li>
                                Supports multiversion concurrency control
                            </li>
                        </ul>
                    </p>
                </Col>
            </PageSection>
            <PageSection style={{backgroundColor: "#222222"}}>
                <Col md={4} lg={{span: 4, order: 1}} className="my-auto" style={{textAlign: "center"}}>
                    <img src={geo} style={{width: "80%"}} alt="Sample Generated Terrain"/>
                </Col>
                <Col md={4} lg={{span: 4, order: 2}} className="my-auto">
                    <h2>GeoGraphix</h2>
                    <p>
                        Terrain generator
                        <ul>
                            <li>
                                Procedural generation with algorithms: Diamond-Square, Perlin Noise, Simplex Noise
                            </li>
                            <li>
                                Configurable parameters for diverse landscape creation
                            </li>
                        </ul>
                    </p>
                    <p>
                        <OpenLink href="https://github.com/Ore-Software/GeoGraphix">Source code</OpenLink>
                    </p>
                </Col>
            </PageSection>
            <PageSection style={{backgroundColor: "#223333"}}>
                <Col md={4} lg={{span: 4, order: 1}} className="my-auto" style={{textAlign: "center"}}>
                    <img src={ray_trace_2} style={{width: "80%"}} alt="Sample Ray Traced Scene"/>
                </Col>
                <Col md={4} lg={{span: 4, order: 2}} className="my-auto">
                    <h2>Ray Tracer</h2>
                    <p>
                        Physics based ray tracer
                        <ul>
                            <li>
                                Realistic lighting models with multiple material types: diffuse, reflective, refractive
                            </li>
                            <li>
                                Supports texture mapping for surface detail
                            </li>
                            <li>
                                Supports Bounding Volume Heirarchy, instancing, and anti-aliasing.
                            </li>
                            <li>
                                CUDA acceleration for improved rendering performance on GPUs
                            </li>
                        </ul>
                    </p>
                    <p>
                        <OpenLink href="https://github.com/jasonlmfong/Ray-Tracer">Source code</OpenLink>
                    </p>
                </Col>
            </PageSection>
            <PageSection style={{backgroundColor: "#222222"}}>
                <Col md={4} lg={{span: 4, order: 1}} className="my-auto" style={{textAlign: "center"}}>
                    <img src={draw_recog} style={{width: "80%"}} alt="Robot Thinking About Sketches"/>
                </Col>
                <Col md={4} lg={{span: 4, order: 2}} className="my-auto">
                    <h2>Drawing Recognition</h2>
                    <p>
                        Drawing application with sketch recognition
                        <ul>
                            <li>
                                Paint-like drawing interface with intuitive user controls
                            </li>
                            <li>
                                Custom computer vision model for real-time sketch recognition and prediction
                            </li>
                        </ul>
                    </p>
                </Col>
            </PageSection>
        </Container>
    );
}
