import React from 'react';

class Element {
    constructor(type, url) {
        this.type = type;
        this.url = url;
        
        // elements are spatially arranged/manipulated as bounding boxes; not
        // all boxes have to be visible
        this.visible = false;
        this.box = {
            height : 0,
            width : 0,
            x : 0,
            y : 0
        };
    }

    // [TODO]
    move(x, y) {}
    resize(h, w) {}
}

export default function Frame() {

    const elements = Array();

    return (
        <></>
    );
}