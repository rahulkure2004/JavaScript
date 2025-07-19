let nums = [10, 30, 400, 50];
console.log("Original Array: ", nums);
nums.push(60);
console.log("Push: ", nums);
nums.pop();
console.log("Pop: ", nums);
nums.shift();
console.log("Shift: ", nums);
nums.unshift(20);
console.log("Unshift: ", nums);
console.log("sort", nums.sort());


let arr = ['January', 'July', 'March', 'August'];
arr[1] = 'June';
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift('July');
console.log("Final array: ", arr);


let colors1 = ['red', 'blue', 'green', 'pink', 'yellow'];
let colors2 = ['blue', 'black', 'white'];

console.log('colors1: ', colors1);
console.log('colors2: ', colors2);

console.log("indexOf: ", colors1.indexOf('blue'));
console.log("indexOf: ", colors1.indexOf('purple'));

console.log("includes: ", colors1.includes('blue'));
console.log("includes: ", colors1.includes('Blue'));

console.log("reverse: ", colors1.reverse());

console.log('concat: ', colors1.concat(colors2));


console.log('colors1: ', colors1);
console.log('slice: ', colors1.slice());
console.log('slice(2,3): ', colors1.slice(2, 3));
console.log('slice(-2): ', colors1.slice(-2));
console.log('slice(1,2): ', colors1.slice(1, 2));

//For the given start state of an array, change it to final from using splice
let months = ['january', 'july', 'march', 'august'];
console.log('origional: ', months);
months.splice(0, 2, 'july', 'june');
console.log('splice: ', months);

//Reurn the index of the "javascript" from the given array, if it was reversed.
let language = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];
console.log("indexOf:", language.indexOf('javascript'));
console.log('indexOf reverse: ', language.reverse().indexOf('javascript'));

//Nested Arrays
let number = [[2, 4], [3, 6], [4, 8]];
console.log("Nested Array: ", number);
console.log('number[0][1] ', number[0][1]);
console.log("number[2][0] ", number[2][0]);
console.log('number[1][0] ', number[1][0]);

//Create a nested array to show the following tic-tac-toe state
let game = [['X', null, 'O'], [null, 'X', null], ['O', null, 'X']];
console.log("tic-tac-toe state: ", game);
game[0][1] = 'O';
game[1][0] = 'O';
game[1][2] = 'X';
game[2][1] = 'O';


// Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
// positive number].
// For example: for array [7, 9, 0, -2] and n=3
// Print, [7, 9, 0]
let array = [7, 9, 0, -2];
let n = 3;
// array.pop();
console.log(array.slice(0, n));


// Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
// positive number].
// For example: for array [7, 9, 0, -2] and n=3
// Print, [9, 0, -2]

print = array.splice(1, n);
console.log(print);


//Qs3. Write a JavaScript program to check whether a string is blank or not
let str = prompt('Please enter the String: ');
if (str === '') {
    console.log('string is empty');
}
else {
    console.log('string is not empty')
}

//Qs4. Write a JavaScript program to test whether the character at the given (character)
// index is lower case.
let nStr = 'Rahul Kure';
let idx = 0;
if (nStr[idx] === nStr[idx].toLowerCase()) {
    console.log('the given (character) index is lower case');
}
else {
    console.log('the given (character) index is not lower case');
}

//Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.
let newStr = '          Rahul kure                   ';
console.log(`Original String: ${newStr}`)
console.log(`Without spaces String: ${newStr.trim()}`);


//Qs6. Write a JavaScript program to check if an element exists in an array or not
let arrays = [10, 20, 30, 40, 50];
let check = 30;
//solution 1
if (arrays.indexOf(check) != -1) {
    console.log('element exists in an array');
}
else {
    console.log('element not exists in an array');
}


//solution 2
let item = 40;
if (arrays.includes(item)) {
    console.log('element exists in an array');
}
else {
    console.log('element not exists in an array');
}