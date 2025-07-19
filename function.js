function poem() {
    console.log("Code that dances in the night, \nFunctions flowing, smooth and bright, \nJavaScript makes the web feel right.");
}
poem();


//Create a function to roll a dice & always display the value of the dice(1 to 6)
function rollDice() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}
rollDice();
rollDice();
rollDice();
rollDice();
rollDice();
rollDice();

//Create a function that gives us the average of 3 numbers.
function average(a, b, c) {
    let avg = (a + b + c) / 3;
    console.log("Average: ", avg);
}
average(2, 3, 5);

//Create a function that prints the multiplication table of a numkber.
function multiplication(a) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} * ${a} = `, i * a);
    }
}
multiplication(5);


//Create a function that returns the sum of numbers from 1 to n
function sumOfn(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
// let n = prompt("Enter the number: ");
console.log(sumOfn(10));

//Create a function that return the concatation of all strings in an array.
function array(arr) {
    let result = "";
    for(let i=0;i<arr.length;i++){
        result +=arr[i];
    }
    return result;
}
let arr = ['Rahul','Ankush','Kure'];
console.log(array(arr));