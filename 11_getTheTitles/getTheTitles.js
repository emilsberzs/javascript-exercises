/*
const getTheTitles = function(array) {
    titles = [];
    array.forEach(book => titles.push(book.title))
console.log(titles)
return titles;
};
*/

const getTheTitles = function(array) {
    return array.map(book => book.title);
}

// Do not edit below this line
module.exports = getTheTitles;
