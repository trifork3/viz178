import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import statics from '../statics';

export default function Package() {

    const [thumbnail, setThumbnail] = useState("/thumbnails/default.png");

    return (
        <>
            <Card border="primary" style={{ width: statics.thumbnail.width }}>
                <Card.Img src={ thumbnail } />
                <Card.ImgOverlay>
                    <Card.Title>{ title }</Card.Title>
                </Card.ImgOverlay>
            </Card>
        </>
    );
}