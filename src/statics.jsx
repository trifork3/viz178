module.exports = {
    thumbnail: {
        vw: 10,
        vh: 10,
        width: window.innerWidth / (vw / 100),
        height: window.innerHeight / (vh / 100)
    },
    pkg_types : {
        image: [ 'png', 'jpg', 'gif' ],
        video: [ 'mp4' ],
        audio: [ 'mp3' ],
    }
};