function getCount(str) {
let count=0;
const vowels=["a", "e", "i", "o", "u"]
  for(let i=0; i<str.length; i++) 
    for(let j=0; j<vowels.length; j++){
      if(str.charAt(i)===vowels[j]){
        count++
      }
    }
  return count;
  } 