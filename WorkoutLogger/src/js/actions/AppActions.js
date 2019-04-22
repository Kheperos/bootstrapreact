const AppDispatcher = require("../dispatcher/AppDispatcher");
const AppConstants = require("../constants/AppConstants");

var AppActions = {
    showForm() {
        AppDispatcher.handleViewAction({
               actionType: AppConstants.SHOW_FORM
        })
    },
    addWorkout(workout) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.ADD_WORKOUT,
            workout: workout,
        })
    },
};

module.exports = AppActions;