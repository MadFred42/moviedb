import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Context } from '../..';
import { ICreators } from '../../types/types';
import SpinnerModel from '../spinnerModel';
import img from './nophoto.png';

import './actorsList.css'

interface IMovieIdProps {
    movieId: string;
}

export const ActorsList = observer(({movieId}: IMovieIdProps) => {
    const { creatorsStore } = useContext(Context);
    const shownActors = creatorsStore.creators.filter((actor: any) => actor.image_url);
    
    if (!creatorsStore.roles) {
        return <>No data...;(</>
    }

    return (
        <Container className={creatorsStore.creators.length === 0 ? "d-flex justify-content-center": 'p-0'}>
            {
                creatorsStore.creators.length === 0 ?
                <SpinnerModel height={'30px'} marginTop={'0'} width={'30px'} /> :
                <Row className="">
                    {
                        shownActors.map((actor: ICreators, index: any, array: any[]) => {
                            const { image_url, imdb_id, name, role } = actor;
                            array.length = 8;
                            return (  
                                <Col>
                                    <Card className="border-0" key={index}>
                                        <Card.Img 
                                            alt="creators"
                                            className="rounded-circle mobile__img mx-auto"
                                            src={ image_url ? image_url : img }
                                            variant="top" />
                                        <Card.Body className="mx-auto p-0"> 
                                            <Card.Title 
                                                className="text-center mobile__name"
                                                onClick={() => window.open(`https://www.imdb.com/name/${imdb_id}/`)} 
                                                style={{ cursor: 'pointer' }}>
                                                    <ins>{name}</ins>
                                            </Card.Title>
                                            <Card.Text className="text-center mobile__role">As { role }</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                    <a 
                        className="m-3 p-0"
                        href={`https://www.imdb.com/title/${movieId}/fullcredits`} 
                        rel="noreferrer" 
                        target="_blank">
                            And { creatorsStore.creators.length - 8 } more...
                    </a>
                </Row>
            }
        </Container>
    );
});