const assert = require('assert');

const capitalizeFirstLetters = function (input) {
    if (input.length > 0) {
        let words = input.split(' ');
        for(let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
        return words.join(' ');
    } else {
        return '';
    }
};

module.exports = capitalizeFirstLetters;