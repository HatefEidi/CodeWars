function findAdmin(list, lang) {
  // thank you for checking out the Coding Meetup kata :)
  //1. filter throught the array and return the arrays
  const filteredDevelopers = list.filter(dev=> dev.language===lang && dev.githubAdmin==="yes");
  return filteredDevelopers.length === 0 ? [] : filteredDevelopers;
}