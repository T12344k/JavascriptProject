function groupAnagrams(strs) {
    // it takes a string and returns an dictionary with key as "Outcome" and values as list of lits of grouped anagrams.
 
     // create a dictionary to store the grouped anagrams
     let anagrams = {};
     // split the string into list of words
     let words = strs.split(" ");
     // iterate over the list of words and remove punctuations and spaces
     for (let i = 0; i < words.length; i++) {
         words[i] = words[i].replace(/[^\w]/g, '');
     }
     // iterate over the list of words and store the charcters count in a list of 26 elements and put that as key in the dictionary
     for (let i = 0; i < words.length; i++) {
         let chars = new Array(26).fill(0);  // create a list of 26 elements and fill it with 0
         for (let j = 0; j < words[i].length; j++) { // iterate over the word and increment the count of the character in the list
             chars[words[i].charCodeAt(j) - 97]++;   //
         }
         if (anagrams[chars] === undefined) {    // if the key is not present in the dictionary, create a list and add the word to it
             anagrams[chars] = [words[i]];     // create a list and add the word to it
         } else {
             anagrams[chars].push(words[i]);  // if the key is present in the dictionary, add the word to the list
         }
     }
     let result = {};                      // create a dictionary to store the result
     result["Outcome"] = Object.values(anagrams);    // store the list of lists of grouped anagrams in the dictionary
     return result;                     // return the dictionary
 }
 
 console.log(groupAnagrams("house mouse ouseh ball labl hello hi."));
