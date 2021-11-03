import React from 'react';
import { IMovie } from '../../types/types';
import { useHistory } from 'react-router';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

interface MoviesPropsList {
    results: IMovie
}

export const MoviesList= ({ results }: MoviesPropsList) => {
    const history = useHistory();
    const { banner, gen, imdb_id, rating, title } = results;

    return (
        <Card className="mx-auto" style={{ width: '18rem' }}>
            <Card.Img src={ banner } style={{ height: '350px' }} variant="top" />
            <Card.Body>
                <Card.Title 
                    onClick={() => history.push({ pathname: `/movie/${imdb_id}`, state: { id: imdb_id } })}
                    style={{ cursor: 'pointer', textAlign: 'center' }}>
                        { title }
                </Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem className="mx-auto p-0">
                    {gen.map((genre: any, i: any, arr: any) => {
                        arr.length = 3;
                        return (
                            <big 
                                className="text" 
                                key={i}
                                style={{ color: 'black', margin: '0 .5em' }}>
                                    { genre.genre }
                            </big>
                        )
                    })}
                </ListGroupItem>
                <ListGroupItem className="mx-auto">
                    <i 
                        className="fas fa-star" 
                        style={{ alignSelf: 'center', color: 'yellow', marginLeft: '5px' }} />
                    <big 
                        className="text" 
                        style={{ color: 'black', margin: '0 .5em' }}>
                            IMDb: { rating }
                    </big>
                </ListGroupItem>
            </ListGroup>
        </Card>
    );
};