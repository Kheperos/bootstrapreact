const AppDispatcher = require("../dispatcher/AppDispatcher");
const AppConstants = require("../constants/AppConstants");

var AppActions = {
    saveVideo(video){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.SAVE_VIDEO,
            video: video,
        });
    },
    saveVideoDOM(video){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.SAVE_VIDEO_DOM,
            video: video,
        });
    },
    receiveVideos(videos){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.RECEIVE_VIDEOS,
            videos: videos,
        });
    },
    removeVideo(videoID){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.REMOVE_VIDEO,
            videoID: videoID,
        });
    },
    removeVideoDOM(videoID){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.REMOVE_VIDEO_DOM,
            videoID: videoID,
        });
    },
};

module.exports = AppActions;