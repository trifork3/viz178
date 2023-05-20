import React, { useEffect, useRef } from "react";
import Package from "./Package";
import statics from "../statics";

// [CONCEPT] a PackStack is a vertical navigation bar from which Packages can
// be drag and dropped into a visualization; Packages within the PackStack are
// represented by their thumbnails
export default function PackStack({ packages }) {
    
    const pkgs = [];
    
    useEffect(() => {
        console.log(packages);
        Object.keys(packages).forEach((pkg) => {
            pkgs.push(<Package asset={ pkg } thumbnail={ pkg.thumbnail } />);
        })
    });

    return (
        <div id="component-packstack">
        </div>
    );
}