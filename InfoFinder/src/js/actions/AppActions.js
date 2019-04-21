const AppDispatcher = require("../dispatcher/AppDispatcher");
const AppConstants = require("../constants/AppConstants");

var AppActions = {
    searchText(search) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.SEARCH_TEXT,
            search: search
        })
    },
    receiveResults(results) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.RECEIVE_RESULTS,
            results: results
        })
    }
};

module.exports = AppActions;