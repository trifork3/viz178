import statics from "./statics";
// import sharp from "sharp";

// return [ file extension, package type ] from a file URL
const parseUrl = (url) => {
    let ext = url.split('.').pop();
    Object.keys(statics.pkg_types).forEach((type) => {
        if (statics.pkg_types[type].includes(ext)) {
            return [ ext, type ];
        }
    });
    
    return [ "", "" ];
};

const helper = {
    parseUrl : parseUrl,

    // create thumbnails for all possible package types
    // [TODO] need backend to save generated files + process video
    generateThumbnail : (asset) => {
        const [ ext, type ] = parseUrl(asset);
        const thumbnailPath = "/assets/thumbnails/";
        let filename = statics.thumbnailDefault_all;

        // images only need to be resized
        if (type == statics.PKG_TYPE_IMG) {
            // sharp(asset)
            //     .resize({   width : statics.thumbnail.width, 
            //                 height : statics.thumbnail.height })
            //     .toFile(filename);
        }
        // use a frame from the video as its thumbnail
        else if (type == statics.PKG_TYPE_VID) {
            filename = statics.thumbnailDefault_video;
        }
        else if (type == statics.PKG_TYPE_AUD) {
            filename = statics.thumbnailDefault_audio;
        }
        else {
        }

        return thumbnailPath + filename;
    },
};

export default helper;