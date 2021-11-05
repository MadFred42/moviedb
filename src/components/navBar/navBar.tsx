import React, { useContext } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Context } from '../..';

export const NavBar = () => {
    const { movieStore } = useContext(Context);

    const setMovies = (e: any) => {
        console.log(e.target.text);
        switch(e.target.text) {
            case 'Popular':
                e.preventDefault();
                movieStore.getMoviesBySubject('byPopularity');
                return;
            case 'Top rated':
                movieStore.getMoviesBySubject('byRating');
                return;
            case 'Upcoming':
                e.preventDefault();
                movieStore.getMoviesBySubject('upcoming');
        }
    }

    return (
        <Navbar bg="light" className="border-bottom border-2" expand="lg">
            <Container>
                <Navbar.Brand href="/">My movieDB</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        navbarScroll
                        style={{ maxHeight: '100px' }}
                    >
                        <Nav.Link 
                            href="/"
                            onClick={(e: any) => setMovies(e)}>
                                Popular
                        </Nav.Link>
                        <Nav.Link 
                            href="/upcoming"
                            onClick={(e: any) => setMovies(e)}>
                                Upcoming
                        </Nav.Link>
                        <Nav.Link 
                            href="/toprated"
                            onClick={(e: any) => setMovies(e)}>
                                Top rated
                        </Nav.Link>
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