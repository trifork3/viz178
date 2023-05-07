import React from 'react';
import Image from 'react-bootstrap/Image';
import statics from '../statics';

// [CONCEPT] media container unit; a Package visibly displays the type of media
// it represents to users
export default function Package({ asset, thumbnail }) {
    
    return (
        <>
            <Image  key={ asset } 
                    src={ thumbnail }
                    thumbnail="true" 
                    height={ statics.thumbnail.height } 
                    width={ statics.thumbnail.width }
            />
        </>
    );
}