const outcome = new Boolean(false);


function handleStr(str){
    return str.toLowerCase().split("").sort().join("")
}

function anagram(str1, str2) {
      if (str1.length !== str2.length) {
        return false;
      } else {
        if (
            handleStr(str1) ===
          handleSte(str2)
        ) {
          return true;
        } 
        return false;
        
      }
    }
    
    console.log(anagram("hello", "olleh"));
    console.log(anagram("ronak", "konar"));
    console.log(anagram("tehila","helman"));
