const getTheTitles = function(array) {
    titles = [];
    array.forEach(book => titles.push(book.title))
console.log(titles)
return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
