//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;

console.log(num10 + string8/1 + one);  // -> 19
console.log(num10 + string8*1 + one);  // -> 19
console.log(num10 + Number(string8) + one);  // -> 19

function getSum(...args) {
    var sum = 0;
    args.forEach( arg => sum += Number(arg) );
    return sum;
}
console.log(getSum(num10, string8, one));  // -> 19


//2. write a loop that will log only numbers divisible by 3 between 20 - 100

function logMultsOf3(lowerBound, upperBound) {
    for (var i = lowerBound + 1; i < upperBound; i++) {
        if (i % 3 === 0) {
            console.log(i);
            i += 2; // (save a little time)
        }
    }
}
logMultsOf3(20, 100);  // -> 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99


//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98];

function getAvg(arr) {
    return arr.reduce( (acc, val) => acc + val )/arr.length;
}
console.log(getAvg(scores));  // -> 85.4
