"use strict";

let content = require('../../data/language.json');

let LanguageApi = {
	getContent(language = 'en') {
		return content.filter(obj => obj.lang === language)[0];
	}
};

module.exports = LanguageApi;
