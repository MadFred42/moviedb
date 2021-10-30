import React from 'react';
import { Carousel } from 'react-bootstrap';
import { IMovie } from '../../types/types';

interface ICarouselProps {
    props: IMovie;
}

export const CarouselModel = ({ props }: ICarouselProps) => {
    const { banner, trailer } = props;
    
    return (
        <Carousel variant="dark" style={{ width: '70%' }}>
            <Carousel.Item>
                <div className="d-flex justify-content-center mx-auto" style={{ width: '60em' }}>
                    <img
                        alt="First slide"
                        className="d-block"
                        src={ banner }
                        style={{ height: '40em', width:'70%' }}
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex justify-content-center mx-auto">
                    <iframe src={ trailer }
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        frameBorder='0'
                        style={{height: '40em', width:'70%'}}
                        title='video'
                    />
                </div>
            </Carousel.Item>
        </Carousel>
    );
};