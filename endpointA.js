//defines outcome as a boolean so it can be returned 
const outcome = new Boolean(false);

//function to split words and sort them alphabetically
function handleStr(str){
    return str.toLowerCase().split("").sort().join("")
}

//function to check if two words are anagrams
function anagram(str1, str2) {
    //check if the two words have the same length
      if (str1.length !== str2.length) {
        return false;
      } else {
        if (
            //if the two words, are equal if sorted alphabetically, they are angrams
            handleStr(str1) ===
          handleStr(str2)
        ) {
          return true;
        } 
        return false;
        
      }
    }
//test with the following words
    
    console.log(anagram("hello", "olleh"));
    console.log(anagram("ronak", "konar"));
    console.log(anagram("tehila","helman"));
