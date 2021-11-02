import React from 'react';
import { Carousel } from 'react-bootstrap';
import { IMovie } from '../../types/types';

interface ICarouselProps {
    props: IMovie;
}

export const CarouselModel = ({ props }: ICarouselProps) => {
    const { banner, trailer } = props;
    
    return (
        <Carousel 
            className='mx-auto'
            interval={ null }
            variant="dark">
            <Carousel.Item >
                <div className='d-flex justify-content-center' style={{ height: '50%', width: '50%' }}>
                    <img
                        alt="First slide"
                        src={ banner }
                        style={{ width: '100%'}}
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='d-flex justify-content-center' style={{ height: '50%', width: '50%' }}>
                    <iframe src={ trailer }
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        frameBorder='0'
                        title='video'
                        style={{ height: '50%', width: '50%' }}
                    />
                </div>
            </Carousel.Item>
        </Carousel>
    );
};