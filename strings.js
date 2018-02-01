 //1. Given the following sentence: Change all of the lowercase letters i, in reference to yourself, to the uppercase I
 // careful not to uppercase the i in the word pair
var sentence = 'When i went to the mall i bought a pair of shoes.';

function capitalizeI(str) {
    return str.replace(/\bi\b/g, "I");
}
console.log(capitalizeI(sentence));  // -> 'When I went to the mall I bought a pair of shoes.'

function altCapitalizeI(str) {
    return str.split(" ").map( word => word === "i" ? "I" : word).join(" ");
}
console.log(altCapitalizeI(sentence));  // -> 'When I went to the mall I bought a pair of shoes.'

function alt2CapitalizeI(str) {
    var capitalized = "";
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (char === "i" && str[i-1] === " " && str[i+1] === " ") {
            char = char.toUpperCase();
        }
        capitalized += char;
    }
    return capitalized;
}
console.log(alt2CapitalizeI(sentence));  // -> 'When I went to the mall I bought a pair of shoes.'


//2. The history of JavaScript is interesting but how many times does the letter a appear? Find a way to count both upper and lower case A's

var jsHistory = 'JavaScript, not to be confused with Java, was created in 10 days in May 1995 by Brendan Eich, then working at Netscape and now of Mozilla. JavaScript was not always known as JavaScript: the original name was Mocha, a name chosen by Marc Andreessen, founder of Netscape. In September of 1995 the name was changed to LiveScript, then in December of the same year, upon receiving a trademark license from Sun, the name JavaScript was adopted. This was somewhat of a marketing move at the time, with Java being very popular around then.';

function countA(str) {
    var test = /a/ig, count = 0;
    while ( test.exec(str) !== null ) {
        ++count;
    }
    return count;
}
console.log(countA(jsHistory));  // -> 52

function altCountA(str) {
    return str.split("").filter( letter => letter === "a" || letter === "A" ).length;
}
console.log(altCountA(jsHistory));  // -> 52

function alt2CountA(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "A") {
            ++count;
        }
    }
    return count;
}
console.log(alt2CountA(jsHistory));  // -> 52


//3. Given the following sentence: Uppercase the entire word scream each time it appears in the sentence 
//I SCREAM, you SCREAM, we all SCREAM for icecream

var text = 'I scream, you scream, we all scream for icecream';

function scream(str) {
    return str.replace(/scream/g, "SCREAM");
}
console.log(scream(text));  // -> 'I SCREAM, you SCREAM, we all SCREAM for icecream'

function altScream(str) {
    var screamLength = "scream".length;
    var upperCased = "";
    for (var i = 0; i < str.length; i++) {
        var nextSubStr = str[i];
        if (str.substr(i, screamLength) === "scream") {
            nextSubStr = "SCREAM";
            i += screamLength - 1;
        }
        upperCased += nextSubStr;
    }
    return upperCased;
}
console.log(altScream(text));  // -> 'I SCREAM, you SCREAM, we all SCREAM for icecream'

function alt2Scream(str) {
    var arr = str.split(" ");
    var i = 0, upperCased = "";
    while (i < arr.length) {
        var nextWord = arr[i] === "scream" ? "SCREAM" : arr[i];
        nextWord = arr[i] === "scream," ? "SCREAM," : nextWord;
        var space = i === arr.length - 1 ? "" : " ";
        upperCased += nextWord + space;
        i++;
    }
    return upperCased;
}
console.log(alt2Scream(text));  // -> 'I SCREAM, you SCREAM, we all SCREAM for icecream'
