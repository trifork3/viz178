import statics from "./statics";

module.exports = {
    // return [ file extension, package type ] from a file URL
    parseUrl : (url) => {
        let ext = url.split('.').pop();
        Object.keys(statics.pkg_types).forEach((type) => {
            if (statics.pkg_types[type].includes(ext)) {
                return [ ext, type ];
            }
        });
        
        return [ "", "" ];
    },
    // create thumbnails for all possible package types
    generateThumbnail : (asset) => {

    }
};