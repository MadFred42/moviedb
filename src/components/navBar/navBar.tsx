import React, { useContext } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Context } from '../..';

export const NavBar = () => {
    const { movieStore } = useContext(Context);

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">My movieDB</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        navbarScroll
                        style={{ maxHeight: '100px' }}
                    >
                        <Nav.Link href="#action1">Popular</Nav.Link>
                        <Nav.Link href="#action2">Last released</Nav.Link>
                        <Nav.Link href="#action2">Top rated</Nav.Link>
                        <NavDropdown id="navbarScrollingDropdown" title="Genres">
                            {
                                movieStore.genres.map((genre: string) => 
                                    <NavDropdown.Item 
                                        href="#action3"
                                        key={genre} >
                                            {genre}
                                    </NavDropdown.Item>)
                            }
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            aria-label="Search"
                            className="me-2"
                            placeholder="Search"
                            type="search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};