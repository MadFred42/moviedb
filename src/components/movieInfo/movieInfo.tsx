import React, { useContext } from 'react';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import ActorsList from '../actorsList';
import { ListGroup } from 'react-bootstrap';
import CarouselModel from '../carouselModel';

export const MovieInfo = observer(() => {
    const { movieStore } = useContext(Context);
    const { content_rating, imdb_id, plot, rating, title, type, year } = movieStore.movie;
    const ucFirst = (str: string) => {
        if (!str) return str;
      
        return str[0].toUpperCase() + str.slice(1);
    }

    return (
        <div>
            <div className="card mb-3">
                <div className="bg-secondary d-flex justify-content-between mb-2 p-3 text-white">
                    <div>
                        <h1 className="card-title">{ title }</h1>
                        <ListGroup horizontal>
                            <ListGroup.Item>{ ucFirst(type) }</ListGroup.Item>
                            <ListGroup.Item>{ content_rating }</ListGroup.Item>
                            <ListGroup.Item>{ year }</ListGroup.Item>
                        </ListGroup>
                    </div>
                    <div className="d-block">
                    <h1 className="card-title">IMDb RATING</h1>
                        <ListGroup horizontal className="justify-content-center f">
                            <ListGroup.Item className="list-group-item">
                                <i className="fas fa-star"></i>
                            </ListGroup.Item>
                            <ListGroup.Item className="list-group-item">{ rating }/10</ListGroup.Item>
                        </ListGroup>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-between" style={{ height: '40em' }}>
                <CarouselModel props={ movieStore.movie } />
                <div className="d-block" style={{ width: '30%' }}>
                    <h2 style={{ textAlign: 'center' }}>Cast:</h2>
                    <div>
                        <ActorsList />
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