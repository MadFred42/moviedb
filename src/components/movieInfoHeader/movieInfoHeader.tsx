import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';

export const MovieInfoHeader = observer(() => {
    const { movieStore } = useContext(Context)
    const { content_rating, rating, title, type, year } = movieStore.movie;
    const ucFirst = (str: string) => {
        if (!str) return str;
      
        return str[0].toUpperCase() + str.slice(1);
    };

    return (
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
                <h1 className="card-title" style={{textAlign: 'center'}}>IMDb RATING</h1>
                    <ListGroup horizontal className="justify-content-center">
                        <ListGroup.Item className="list-group-item">
                            <i className="fas fa-star"></i>
                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item">{ rating }/10</ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        </div>
    )
});