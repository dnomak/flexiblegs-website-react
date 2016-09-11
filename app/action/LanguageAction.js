"use strict";

let Dispatcher = require('../dispatcher/Dispatcher');
const ACTION_TYPES = require('../constant/LanguageConstant');

let LanguageAction = {
  switchLanguage(language) {
    Dispatcher.dispatch({
      actionType: ACTION_TYPES.SWITCH_LANGUAGE,
      language: language
    });
  },
  initApp() {
    Dispatcher.dispatch({
      actionType: ACTION_TYPES.INIT_APP
    });
  }
};

module.exports = LanguageAction;
