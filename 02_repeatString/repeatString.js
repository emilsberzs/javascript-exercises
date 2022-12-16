const repeatString = function(string, times) {
    if (times >= 1){
    return string.repeat(times);
    } else if (times < 0) {
        return "ERROR"
    } else {
        return ""
    }
};

// Do not edit below this line
module.exports = repeatString;
