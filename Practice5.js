// Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array.
let arr = [10,5,25,3,4,8];
let ans = arr.map((el) => el*el);
let sum = ans.reduce((res,el) => res+el);
let average = sum/ans.length;
console.log(`Square of array [${ans}]`);
console.log(`sum of array ${sum}`);
console.log(`Avarage of array ${average}`);

// Qs2. Create a new array using the map function whose each element is equal to the
// original element plus 5.
let oldArray = [1,2,3,4,5,6];
let newArray = oldArray.map((el) => el+5);
console.log(`original element plus 5: [${newArray}]`);


// Qs3. Create a new array whose elements are in uppercase of words present in the
// original array.
let str = ['rahul','vivek','anand','aman','om'];
let newStr = str.map((string) => string.toUpperCase());
console.log(`uppercase of words in array: [${newStr}]`);

// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled.
let doubleAndReturnArgs = ((arr, ...args) => [
    ...arr,...args.map((v) => v*2),
]);
console.log("double And Return Args",doubleAndReturnArgs([1,2,3],4,4));


//Qs5. Write a function called mergeObjects that accepts two objects and returns a new
// object which contains all the keys and values of the first object and second object.
let mergeObjects = ((obj1,obj2) => ({...obj1, ...obj2}));
console.log("mergeObjects:",mergeObjects({a:12,b:13},{c:14,d:15}));