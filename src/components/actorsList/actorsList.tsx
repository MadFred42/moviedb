import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Context } from '../..';
import { ICreators } from '../../types/types';
import SpinnerModel from '../spinnerModel';
import img from './nophoto.png'

export const ActorsList = observer(() => {
    const { creatorsStore } = useContext(Context);
    const actors = Array.prototype.concat(creatorsStore.creators);

    return (
        <Container className={creatorsStore.creators.length === 0 ? "d-flex justify-content-center": ''}>
            {
                creatorsStore.creators.length === 0 ?
                <SpinnerModel height={'30px'} marginTop={'0'} width={'30px'} /> :
                <Row className="justify-content-md-center">
                    {
                        actors.map((actor: ICreators, index: any, array: any[]) => {
                            const { image_url, name, role } = actor;
                            array.length = 8;
                            return (  
                                <Col className="xs lg=2" key={index}>
                                        <img 
                                            alt="creators"
                                            className="rounded-circle"
                                            src={ image_url ? image_url : img }
                                            style={{ height:'100px', padding: '16', width: '100px' }} />
                                        <Card.Body>
                                            <Card.Title style={{ fontSize: '1em' }}>{name}</Card.Title>
                                            <Card.Text>As { role }</Card.Text>
                                        </Card.Body>
                                </Col>
                            )
                        })
                    }
                    <a href="#">And { creatorsStore.creators.length - actors.length } more...</a>
                </Row>
            }
        </Container>
    );
});