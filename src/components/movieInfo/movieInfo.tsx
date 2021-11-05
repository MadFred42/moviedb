import React, { useContext } from 'react';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import ActorsList from '../actorsList';
import MovieInfoHeader from '../movieInfoHeader';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';

export const MovieInfo = observer(() => {
    const { movieStore } = useContext(Context);
    const { banner, description, imdb_id, gen, trailer } = movieStore.movie;
    const history = useHistory();
    const getMovieByGenre = (e:any) => {
        movieStore.getMoviesByGenre('byGen', e.target.id);
        history.push('/');
    }    

    return (
        <Container className="p-0">
            <MovieInfoHeader />
            <div className="d-flex justify-content-between m-3">
                <div className="align-middle">
                    {
                        gen ?
                        gen.map((genre: any) => 
                            <button 
                                className="bg-secondary m-1 rounded-pill text-white"
                                id={genre.genre}
                                key={genre.genre}
                                onClick={(e: any) => getMovieByGenre(e)}>
                                    {genre.genre}
                            </button>
                        ) :
                        null
                    }            
                </div>
                <button 
                    className='btn btn-outline-secondary'
                    onClick={() => window.open(`https://www.imdb.com/title/${imdb_id}/`)}>
                        Watch on IMDB
                </button>
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
            <div className="mb-5">
                <p className="border-left h1 mb-4 mt-4">Description:</p>
                <p className="border border-3 border-top-0 border-danger card-text h5 p-3 rounded">{ description }</p>
            </div>
        </Container>
    );
});