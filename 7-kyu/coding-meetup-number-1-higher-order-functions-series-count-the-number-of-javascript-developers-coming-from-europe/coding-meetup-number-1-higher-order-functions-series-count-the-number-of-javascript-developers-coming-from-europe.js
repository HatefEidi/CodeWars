function countDevelopers(list) {
  let europeanJavascripter = 0;
​
  // Loop through the list of developers
  for (let i = 0; i < list.length; i++) {
    // Check if the developer is from Europe and knows JavaScript
    if (list[i].language === "JavaScript" &&list[i].continent === "Europe" ) {
      europeanJavascripter++;
    }
  }
​
  return europeanJavascripter;
}
​