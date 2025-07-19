//Qs1. Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.
let array = [10,20,30,40];
let arrayAverage = (array) => {
    let sum = 0;
    for(let i=0;i<array.length;i++){
        sum += array[i];
    }
    let avg = sum / array.length;
    return avg;
}
console.log("arrayAverage is: ",arrayAverage(array));

//Qs2. Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.
let isEven = (num) => {
    if(num%2==0){
        console.log(`Its Even number ${num}`);
    }
    else{
         console.log(`Its Odd number ${num}`);
    }

}
let num = 14;
isEven(num);