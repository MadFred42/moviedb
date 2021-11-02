import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Context } from '../..';
import { ICreators } from '../../types/types';
import SpinnerModel from '../spinnerModel';
import img from './nophoto.png';

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
        <Container className={creatorsStore.creators.length === 0 ? "d-flex justify-content-center": ''}>
            {
                creatorsStore.creators.length === 0 ?
                <SpinnerModel height={'30px'} marginTop={'0'} width={'30px'} /> :
                <Row className="justify-content-md-center">
                    {
                        shownActors.map((actor: ICreators, index: any, array: any[]) => {
                            const { image_url, imdb_id, name, role } = actor;
                            array.length = 8;
                            return (  
                                <Col className="xs lg=2" key={index}>
                                        <img 
                                            alt="creators"
                                            className="rounded-circle"
                                            src={ image_url ? image_url : img }
                                            style={{ height:'100px', padding: '16', width: '100px' }} />
                                        <Card.Body> 
                                            <Card.Title 
                                                onClick={() => window.open(`https://www.imdb.com/name/${imdb_id}/`)} 
                                                style={{ cursor: 'pointer', fontSize: '1em' }}>
                                                    {name}
                                            </Card.Title>
                                            <Card.Text>As { role }</Card.Text>
                                        </Card.Body>
                                </Col>
                            )
                        })
                    }
                    <a 
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