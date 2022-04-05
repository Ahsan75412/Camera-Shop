import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../Images/logo.jpg';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link to="/home">HOME</Nav.Link>
                            <Nav.Link to="/reviews">REVIEWS</Nav.Link>
                            <Nav.Link to="/dashboard">DASHBOARD</Nav.Link>
                            <Nav.Link to="/blogs">BLOGS</Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;