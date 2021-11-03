import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';

import './movieInfoHeader.css';

export const MovieInfoHeader = observer(() => {
    const { movieStore } = useContext(Context)
    const { content_rating, rating, title, type, year } = movieStore.movie;
    const ucFirst = (str: string) => {
        if (!str) return str;
      
        return str[0].toUpperCase() + str.slice(1);
    };

    return (
        <div className="card mb-3">
            <div className="bg-secondary d-flex justify-content-between p-3 text-white">
                <div>
                    <h1 className="mobile__title">{ title }</h1>
                    <ListGroup horizontal>
                        <ListGroup.Item className="mobile p-2">{ ucFirst(type) }</ListGroup.Item>
                        <ListGroup.Item className="mobile p-2">{ content_rating }</ListGroup.Item>
                        <ListGroup.Item className="mobile p-2">{ year }</ListGroup.Item>
                    </ListGroup>
                </div>
                <div className="d-block">
                <h1 className="mobile__title" style={{textAlign: 'center'}}>IMDb RATING</h1>
                    <ListGroup horizontal className="justify-content-center">
                        <ListGroup.Item className="mobile p-2">
                            <i className="fas fa-star text-warning"></i>
                        </ListGroup.Item>
                        <ListGroup.Item className="mobile p-2">{ rating }/10</ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        </div>
    )
});