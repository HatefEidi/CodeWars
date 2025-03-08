function accum(s) {
	// your code
  const eachChar=s.split("")
  const mumbling=[]
  
  for(let C=0; C<eachChar.length; C++){
    
     const eachMumble=eachChar[C].toUpperCase()+ eachChar[C].repeat(C).toLowerCase();
     mumbling.push(eachMumble)
    
    }
    return mumbling.join("-");
}

console.log(accum("tony"));