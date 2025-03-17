function getFirstPython(list) {
  // Thank you for checking out my kata :)
  const dev=list.find(e => e.language==='Python');
  return dev? `${dev.firstName}, ${dev.country}`: 'There will be no Python developers';
}