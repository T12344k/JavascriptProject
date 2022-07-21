const string1 = "elvis";
let string2 = "Elvis lives in a house.";
// creating an array of words
const words = string2.toLowerCase().replace(/[.,?!]+/, "").split(" ");
var outcome = [];


// looping through words array and checking for anagram
for (var i = 0; i < words.length; i++) {
    if (words[i].toLowerCase().split("").sort().join("") == string1.toLowerCase().split("").sort().join("")) {
    	// inserting in  array
        outcome.push(words[i])

    }
}

// outputting the array
console.log(outcome);
