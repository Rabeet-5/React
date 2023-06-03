import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from "react-router-dom";
import './Custom.css'

function SMNavbar() {
    return (
        <>

            <div className="container-fluid nav_bg ">
                <div className="row">
                    <div className="col-10 mx-auto">

                        <Navbar bg="Primary" expand="lg">
                            <Container fluid>
                                <Navbar.Brand as={Link} to='' id='Logo'>RS Tech Solutions</Navbar.Brand>
                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <Navbar.Collapse id="navbarScroll">
                                    <Nav
                                        className="ms-auto  my-2 my-lg-0"
                                        style={{ maxHeight: '100px' }}
                                        navbarScroll
                                    >
                                        <Nav.Link as={Link} to='/' className="menu" >Home</Nav.Link>
                                        <Nav.Link as={Link} to='/about' className="menu" >About</Nav.Link>
                                        <Nav.Link as={Link} to='/contact' className="menu" >Contact</Nav.Link>
                                        <Nav.Link as={Link} to='/service' className="menu" >Services</Nav.Link>

                                    </Nav>
                                    
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                </div>

            </div>
        </>
    );
}

export default SMNavbar;