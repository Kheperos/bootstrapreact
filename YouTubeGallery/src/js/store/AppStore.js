const AppDispatcher = require ('../dispatcher/AppDispatcher');
const AppConstants = require ('../constants/AppConstants');
const AppAPI = require('../utils/AppAPI');
const EventEmitter = require('events').EventEmitter;
const assign = require('object-assign');

const CHANGE_EVENT = 'change';

var _videos = [];

var AppStore = assign({}, EventEmitter.prototype, {
    saveVideo(video) {
        _videos.push(video);
    },
    getVideos() {
        return _videos;
    },
    setVideos(videos) {
        _videos = videos;
    },
    removeVideo(videoID) {
        var index = _videos.findIndex(x => x.id === videoID);
        _videos.splice(index, 1);
    },
    emitChange() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
});


AppDispatcher.register(function (payload) {
    var action = payload.action;
    switch (action.actionType) {
        case AppConstants.SAVE_VIDEO:
            //API SAVE
            AppAPI.saveVideo(action.video);

            break;
        case AppConstants.SAVE_VIDEO_DOM:
            //Store Save
            AppStore.saveVideo(action.video);
            //Emit Change
            AppStore.emitChange();

            break;
        case AppConstants.RECEIVE_VIDEOS:
            AppStore.setVideos(action.videos);
            AppStore.emitChange();

            break;
        case AppConstants.REMOVE_VIDEO:
            AppAPI.removeVideo(action.videoID);

            break;
        case AppConstants.REMOVE_VIDEO_DOM:
            AppStore.removeVideo(action.videoID);
            AppStore.emitChange();

            break;
    }
});

module.exports = AppStore;