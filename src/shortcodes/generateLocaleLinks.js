"use strict";

const config = require("../_data/config.json");
const i18n = require("eleventy-plugin-i18n-gettext");

module.exports = (locale, translationKey, category, collection) => {
    let output = "";
    for (let language in config.languages) {
        if (locale && locale !== language) {
            let langProps = config.languages[language];
            if (category && collection) {
                let matchedPage = collection[`${category}_${language}`].find(page => page.fileSlug === translationKey);
                if (matchedPage) {
                    output += `<a href="${matchedPage.url}">${langProps.name}</a>`;
                }
            } else {
                output += `<a href="/${language === config.defaultLanguage ? "" : langProps.slug}">${langProps.name}</a>`;
            }
        }
    }

    return output ? `<nav class="idg-locale" aria-label="${i18n._(locale, "Language")}">${output}</nav>` : output;
};
