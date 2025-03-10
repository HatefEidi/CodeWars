function numObj(arr) {
  return arr.map(num => ({ [num]: String.fromCharCode(num) }));
}
​