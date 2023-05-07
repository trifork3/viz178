import React from 'react';
import Card from 'react-bootstrap/Card';
import statics from '../statics';

export default function Visualization({ packages }) {

    const style = {
        width : statics.canvas.width,
        height : statics.canvas.height,
    };

    return (
        <>
            <Card border="dark" style={ style }>
                <Card.Body>    
                </Card.Body>
            </Card>
        </>
    );
}