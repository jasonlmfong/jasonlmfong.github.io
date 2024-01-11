import React from "react";
import Container from "react-bootstrap/Container";
import TitleSection from "../components/TitleSection";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
    board, 
    ankylo,
    DDG0,
    meerkats,
    brownie,
    gundam,
    orbit,
    roll_ball,
    banff,
    ray_trace_1,
    brownian,
    breach,
    training,
    naill,
    cardboard,
    SL2Z,
    ciel,
    wheatley
} from "../images/images";

export default function Pictures() {
    return (
        <Container fluid>
            <TitleSection style={{backgroundColor: "#EECCEE"}}>
                <Col md={4} className="my-auto">
                    <h1>Pictures</h1>
                </Col>
                <Col md={4}/>
            </TitleSection>
            <Row className="justify-content-md-center text-content">
                <Col md={4} lg={{span: 3, order: 1}} style={{textAlign: "center"}} >
                    <img src={board} style={{width: "80%"}} alt="ShenZhen I/O game"/>
                </Col>
                <Col md={4} lg={{span: 3, order: 2}} style={{textAlign: "center"}}>
                    <img src={ankylo} style={{width: "80%"}} alt="Ankylosaurus Mesh"/>
                </Col>
                <Col md={4} lg={{span: 3, order: 3}} style={{textAlign: "center"}}>
                    <img src={DDG0} style={{width: "80%"}} alt="Discrete Differential Geometry 0"/>
                </Col>
            </Row>
            <Row className="justify-content-md-center text-content" style={{backgroundColor: "#EEEEFF"}}>
                <Col md={4} lg={{span: 3, order: 1}} style={{textAlign: "center"}}>
                    <img src={meerkats} style={{width: "80%"}} alt="A lot of meerkats"/>
                </Col>
                <Col md={4} lg={{span: 3, order: 2}} style={{textAlign: "center"}}>
                    <img src={brownie} style={{width: "80%"}} alt="my dog Brownie"/>
                </Col>
                <Col md={4} lg={{span: 3, order: 3}} style={{textAlign: "center"}}>
                    <img src={gundam} style={{width: "80%"}} alt="Human sized Gundam model"/>
                </Col>
            </Row>
            <Row className="justify-content-md-center text-content">
                <Col md={4} lg={{span: 3, order: 1}} style={{textAlign: "center"}}>
                    <img src={orbit} style={{width: "80%"}} alt="Moon orbiting Earth shader"/>
                </Col>
                <Col md={4} lg={{span: 3, order: 2}} style={{textAlign: "center"}}>
                    <img src={roll_ball} style={{width: "80%"}} alt="Unity roll ball game"/>
                </Col>
                <Col md={4} lg={{span: 3, order: 3}} style={{textAlign: "center"}}>
                    <img src={banff} style={{width: "80%"}} alt="Scenic view of Banff"/>
                </Col>
            </Row>

            <Row className="justify-content-md-center text-content" style={{backgroundColor: "#EEEEFF"}}>
                <Col md={4} lg={{span: 3, order: 1}} style={{textAlign: "center"}}>
                    <img src={ray_trace_1} style={{width: "80%"}} alt="Ray traced scene with a sphere and a skull"/>
                </Col>
                
                <Col md={4} lg={{span: 3, order: 2}} style={{textAlign: "center"}}>
                    <img src={brownian} style={{width: "80%"}} alt="3D Brownian motion"/>
                </Col>
                <Col md={4} lg={{span: 3, order: 3}} style={{textAlign: "center"}}>
                    <img src={breach} style={{width: "80%"}} alt="Into The Breach"/>
                </Col>
            </Row>
            <Row className="justify-content-md-center text-content">
                <Col md={4} lg={{span: 3, order: 1}} style={{textAlign: "center"}}>
                    <img src={training} style={{width: "80%"}} alt="Weights for a neural network"/>
                </Col>
                <Col md={4} lg={{span: 3, order: 2}} style={{textAlign: "center"}}>
                    <img src={naill} style={{width: "80%"}} alt="my cat Naill"/>
                </Col>
                <Col md={4} lg={{span: 3, order: 3}} style={{textAlign: "center"}}>
                    <img src={cardboard} style={{width: "80%"}} alt="Geometric object made from cardboard"/>
                </Col>
            </Row>
            <Row className="justify-content-md-center text-content" style={{backgroundColor: "#EEEEFF"}}>
                <Col md={4} lg={{span: 3, order: 1}} style={{textAlign: "center"}}>
                    <img src={SL2Z} style={{width: "80%"}} alt="Action of SL(2,Z) group"/>
                </Col>
                <Col md={4} lg={{span: 3, order: 2}} style={{textAlign: "center"}}>
                    <img src={ciel} style={{width: "80%"}} alt="Ciel from Elsword"/>
                </Col>
                <Col md={4} lg={{span: 3, order: 3}} style={{textAlign: "center"}}>
                    <img src={wheatley} style={{width: "80%"}} alt="Wheatley from Portal 2"/>
                </Col>
            </Row>
        </Container>
    )
}
