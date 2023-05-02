import React, { useState } from 'react';
import Frame from './Frame';

export default function Visualization() {

    const media1 = "/samoyed-A.jpg";
    const media2 = "/samoyed-B.jpg";

    return (
        <div id="component-visualization">
            <img src={ media1 } />
            <img src={ media2 } />
        </div>
    );
}