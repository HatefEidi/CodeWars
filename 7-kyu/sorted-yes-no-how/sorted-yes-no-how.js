function isSortedAndHow(array) {
  const asc = [...array].sort((a, b) => a - b);
  const desc = [...array].sort((a, b) => b - a);
  
  if (array.every((val, i) => val === asc[i])) return "yes, ascending";
  if (array.every((val, i) => val === desc[i])) return "yes, descending";
  return "no";
}