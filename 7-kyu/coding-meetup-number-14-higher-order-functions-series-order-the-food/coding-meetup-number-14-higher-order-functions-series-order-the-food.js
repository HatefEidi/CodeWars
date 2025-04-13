function orderFood(list) {
  let foodOptions = {};
​
  list.forEach(person => {
    if (!foodOptions[person.meal]) {
      foodOptions[person.meal] = 1;
    } else {
      foodOptions[person.meal]++;
    }
  });
​
  return foodOptions;
}
​