function isSameLanguage(list) {
  // thank you for checking out the Coding Meetup kata :)
  return list.every((val) => val.language === list[0].language );
}