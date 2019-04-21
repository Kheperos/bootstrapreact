const AppDispatcher = require ('../dispatcher/AppDispatcher');
const AppConstants = require ('../constants/AppConstants');
const AppAPI = require('../utils/AppAPI');
const EventEmitter = require('events').EventEmitter;
const assign = require('object-assign');

const CHANGE_EVENT = 'change';

var _results = [];
var _searchText = '';

var AppStore = assign({}, EventEmitter.prototype, {
    setSearchText(search) {
        _searchText = search.text;
    },
    getSearchText() {
        return _searchText;
    },
    setResults(results) {
        _results = results
    },
    getResults() {
        return _results;
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
        case AppConstants.SEARCH_TEXT:
            AppAPI.searchText(action.search);
            AppStore.setSearchText(action.search);
            AppStore.emitChange();

            break;
        case AppConstants.RECEIVE_RESULTS:
            AppStore.setResults(action.results);
            AppStore.emitChange();

            break;

    }
});

module.exports = AppStore;