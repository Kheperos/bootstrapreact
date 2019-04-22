const AppDispatcher = require ('../dispatcher/AppDispatcher');
const AppConstants = require ('../constants/AppConstants');
const AppAPI = require('../utils/AppAPI');
const EventEmitter = require('events').EventEmitter;
const assign = require('object-assign');

const CHANGE_EVENT = 'change';

var _workouts = [];
var _showForm = false;

var AppStore = assign({}, EventEmitter.prototype, {
    showForm() {
            _showForm = true;
            console.log(_showForm+'e form');
    },
    getShowForm() {
        return _showForm;
    },
    addWorkout(workout) {
        _workouts.push(workout);
    },
    getWorkouts() {
        return _workouts;
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
        case AppConstants.SHOW_FORM:
            AppStore.showForm();
            AppStore.emitChange();

            break;
        case AppConstants.ADD_WORKOUT:
            AppStore.addWorkout(action.workout);
            // AppAPI.addWorkout(action.workout);
            AppStore.emitChange();

            break;
    }
});

module.exports = AppStore;