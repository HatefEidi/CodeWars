// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
function grow(x){
    return x.reduce((a, b) => a * b);
}

//OTHER APPROCHES:
//1
// const grow = (nums) => nums.reduce((product, num) => product * num, 1);

//2
//This is the smartest one amongst other People's katas:
//const grow=x=>eval(x.join("*"))

console.log(grow([1, 2, 3, 4])); // 24