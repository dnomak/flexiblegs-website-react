"use strict";

let Dispatcher = require('../dispatcher/Dispatcher');
let EventEmitter = require('events').EventEmitter;

let LanguageApi =  require('../api/LanguageApi');

const ACTION_TYPES = require('../constant/LanguageConstant');
const CHANGE_EVENT = 'change';

let _content;

let LanguageStore = Object.assign({}, EventEmitter.prototype, {

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  getContent() {
    return _content;
  }
});

Dispatcher.register(function(action){
  switch(action.actionType) {
    case ACTION_TYPES.SWITCH_LANGUAGE:
      _content = LanguageApi.getContent(action.language);
      LanguageStore.emitChange();
      break;
    case ACTION_TYPES.INIT_APP:
      _content = LanguageApi.getContent();
      LanguageStore.emitChange();
      break;
    default:
  }
});

module.exports = LanguageStore;
