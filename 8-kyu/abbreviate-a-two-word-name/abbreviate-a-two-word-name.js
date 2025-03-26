function abbrevName(name){
​
    // code away
return name.split(" ").map(word => word.charAt(0).toUpperCase()).join(".");
}