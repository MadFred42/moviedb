import React from 'react';
import { Spinner } from 'react-bootstrap';

interface ISpinnerProps {
    height: string;
    marginTop: string;
    width: string;
}

export const SpinnerModel = ({height, marginTop, width}: ISpinnerProps) => {
    return (
        <Spinner 
            animation="border" 
            role="status" 
            style={{height: `${height}`, marginTop: `${marginTop}`, width: `${width}`}}
        >
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    );
};