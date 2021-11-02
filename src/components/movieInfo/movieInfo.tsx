import React, { useContext } from 'react';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import ActorsList from '../actorsList';
import CarouselModel from '../carouselModel';
import MovieInfoHeader from '../movieInfoHeader';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export const MovieInfo = observer(() => {
    const { movieStore } = useContext(Context);
    const { banner, imdb_id, plot, trailer } = movieStore.movie;

    return (
        <div  style={{ height: '1%' }}>
            <MovieInfoHeader />
            <div className="d-flex justify-content-between" style={{ height: '15%' }}>
                {/* <CarouselModel props={ movieStore.movie } /> */}
                <ListGroup horizontal>
                    <ListGroupItem style={{ height: '15%' }}>
                        <img
                            alt="First slide"
                            src={ banner }
                            style={{ position: 'relative'}}
                        />
                    </ListGroupItem>
                    <ListGroupItem>
                        <iframe src={ trailer }
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                            frameBorder='0'
                            title='video'
                            style={{ margin: '0 .5%',width: '100%' }}
                        /> 
                    </ListGroupItem>
                </ListGroup>
                <div className="d-block" style={{ width: '30%' }}>
                    <h2 style={{ textAlign: 'center' }}>Cast:</h2>
                    <div>
                        <ActorsList movieId={imdb_id}/>
                    </div>
                </div>
            </div>
            
            <div className="card-body" >
                <p className="card-text">{ plot }</p>
            </div>
            <button 
                className='btn btn-outline-secondary'
                onClick={() => window.open(`https://www.imdb.com/title/${imdb_id}/`)}>
                    Watch on IMDB
            </button>
        </div>
    );
});