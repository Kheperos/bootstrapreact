const firebase = require('./firebase');
const AppActions = require('../actions/AppActions');

module.exports = {
    saveVideo(video) {
        const firebaseRef = firebase.database().ref('videos');
        firebaseRef
            .push(video)
            .then((snap) => {
                //Store Save
                video.id = snap.key;
                AppActions.saveVideoDOM(video)
            });
    },
    getVideos(){
        const firebaseRef = firebase.database().ref('videos');

        firebaseRef.once("value", function (snapshot) {
            let videos = [];
            snapshot.forEach(function (childSnapshot) {
                let video = childSnapshot.val();
                video.id = childSnapshot.key;
                videos.push(video);
            });
            AppActions.receiveVideos(videos);
        })
    },

    removeVideo(videoID) {
        const firebaseRef = firebase.database().ref('videos');

        firebaseRef.child(videoID)
            .remove()
            .then((snap) => {
                AppActions.removeVideoDOM(videoID);
            });
    }
};