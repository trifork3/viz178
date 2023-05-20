const statics = {
    thumbnailDefault_all : 'card-image.svg',
    thumbnailDefault_video : 'camera-reels.svg',
    thumbnailDefault_audio : 'soundwave.svg',
    thumbnail : {
        vw : 10,
        vh : 10,
    },
    PKG_TYPE_IMG : 'image',
    PKG_TYPE_VID : 'video',
    PKG_TYPE_AUD : 'audio',
    spacing : {
        packStack : 3,
    },
    canvas : {
        vw : 50,
        vh : 50,
    }
};

// derived constants
statics.thumbnail.width =  window.innerWidth * (statics.thumbnail.vw / 100);
statics.thumbnail.height = window.innerHeight * (statics.thumbnail.vh / 100);
statics.pkg_types = {
    [statics.PKG_TYPE_IMG] : [ 'png', 'jpg', 'gif' ],
    [statics.PKG_TYPE_VID] : [ 'mp4' ],
    [statics.PKG_TYPE_AUD] : [ 'mp3' ],
};
statics.canvas.width = window.innerWidth * (statics.canvas.vw / 100);
statics.canvas.height = window.innerHeight * (statics.canvas.vh / 100);

export default statics;