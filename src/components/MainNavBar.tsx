import React from "react";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom"; 
import Nav from "react-bootstrap/Nav";


export default function MainNavBar({sites})  {
    return (
        <Navbar sticky="top" expand="lg" style={{backgroundColor: "#4488FF", padding: ".5rem 1rem"}}>
            <Navbar.Brand as={Link} to="/" push="true">Jason Fong</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{borderColor: "transparent"}}/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/" push="true">Home</Nav.Link>
                    {
                        sites.map(page =>
                            <Nav.Link as={Link} to={"/" + page.path} push="true" key={page.path}>{page.name}</Nav.Link>
                        )
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
