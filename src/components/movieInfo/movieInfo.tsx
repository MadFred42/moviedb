import React, { useContext } from 'react';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import ActorsList from '../actorsList';
import MovieInfoHeader from '../movieInfoHeader';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';

export const MovieInfo = observer(() => {
    const { movieStore } = useContext(Context);
    const { banner, description, imdb_id, gen, plot, trailer } = movieStore.movie;

    console.log(gen);
    return (
        <Container className="p-0">
            <MovieInfoHeader />
            <div className="mb-3">
            {
                gen ?
                gen.map((genre: any) => 
                    <button className="bg-secondary m-1 rounded-pill text-white">{genre.genre}</button>
                ) :
                null
            }            
            </div>
            <Row className="d-flex justify-content-between" style={{ height: '15%' }}>
                <Col className="d-flex justify-content-between h-50">
                    <img
                        alt="banner"
                        src={ banner }
                        style={{ height: '100%', width: '33%' }}
                    />
                    <iframe
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        frameBorder='0'
                        src={ trailer }
                        style={{ width: '65%' }}
                        title='video'
                    />  
                </Col>
                <Col md="auto" className="d-block w-100">
                    <h2 style={{ textAlign: 'center' }}>Cast:</h2>
                    <div>
                        <ActorsList movieId={imdb_id}/>
                    </div>
                </Col>
            </Row>
            <div>
                <p className="border border-3 border-danger border-bottom-0 h1 mb-4">Description:</p>
                <p className="border border-3 border-top-0 border-danger card-text h5 p-3 rounded">{ description }</p>
            </div>
            <button 
                className='btn btn-outline-secondary'
                onClick={() => window.open(`https://www.imdb.com/title/${imdb_id}/`)}>
                    Watch on IMDB
            </button>
        </Container>
    );
});