let n1 = 0;
let n2 = 1;
let nextNumber = n1 + n2
let sequence = [0, 1, 1,]
const fibonacci = function (number) {
    if (number < 0) {
        return "OOPS"
    } else {
        while (sequence.length <= number) {
            console.log(nextNumber);
            n1 = n2;
            n2 = nextNumber;
            nextNumber = n1 + n2;
            sequence.push(nextNumber)

        }
        console.log(sequence[number])
        return sequence[number]
    }
};

// Do not edit below this line
module.exports = fibonacci;
