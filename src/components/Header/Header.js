import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.jpg';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="md" >
                <Container fluid >
                    <Navbar.Brand href="#"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 nav-style text-center  mb-4 "
                            style={{ maxHeight: '200px' }}
                            
                        >
                            <Nav.Link as={Link} to="/">HOME</Nav.Link>
                            <Nav.Link as={Link} to="/home"></Nav.Link>
                            <Nav.Link as={Link} to="/reviews">REVIEWS</Nav.Link>
                            <Nav.Link as={Link} to="/dashboard">DASHBOARD</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">BLOGS</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;