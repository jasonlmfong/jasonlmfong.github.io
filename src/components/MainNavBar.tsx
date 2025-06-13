import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom"; 
import Nav from "react-bootstrap/Nav";


export default function MainNavBar({sites})  {
    return (
        <Navbar sticky="top" expand="lg" style={{backgroundColor: "#4488FF", padding: ".5rem 1rem"}}>
            <Navbar.Brand as={Link} to="/">Jason Fong</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{borderColor: "transparent"}}/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    {
                        sites.map(page =>
                            <Nav.Link as={Link} to={"/" + page.path} key={page.path}>{page.name}</Nav.Link>
                        )
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
