const AppDispatcher = require ('../dispatcher/AppDispatcher');
const AppConstants = require ('../constants/AppConstants');
const AppAPI = require('../utils/AppAPI');
const EventEmitter = require('events').EventEmitter;
const assign = require('object-assign');

const CHANGE_EVENT = 'change';

var _videos = [];

var AppStore = assign({}, EventEmitter.prototype, {
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

    }
});

module.exports = AppStore;