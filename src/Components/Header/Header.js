import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar className='header' expand="lg">
            <Container>
                <Navbar.Brand href="#/">Skill Checker</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to="/">Home</Link>
                        <Link to="/quiz">Quiz</Link>
                        <Link to="/statistics">Statistics</Link>
                        <Link to="/blogs">Blogs</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;