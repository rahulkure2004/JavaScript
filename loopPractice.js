// Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3]
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
console.log('Original array: ',arr);
let num =2;
for(let i=0;i<arr.length;i++){
    if(num===arr[i]){
        arr.splice(i,1);
    }
}
console.log('   array: ',arr);

// Qs2. Write a JS program to find the no of digits in a number.
// Example : if number = 287152, count = 6
let number = 2871525;
let count = 0;
while(number!=0){
    count++;
    number = Math.floor(number/10); //math.floor method integer mde convert karte
}
console.log('the no of digits in a number: ',count);


// Qs3. Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum = 25
let numbers = 287152;
let sum = 0;
while(numbers!=0){
    let rem = numbers%10;
    sum += rem;
    numbers = Math.floor(numbers/10);
}
console.log('Sum is: ',sum);

//Reverse Number
let reverseNumber = 1452;
console.log('Original Number: ',reverseNumber);
let reverse = 0;
while(reverseNumber!=0){
    let rem = reverseNumber%10;
    reverse = reverse * 10 +rem;
    reverseNumber = Math.floor(reverseNumber/10);
}
console.log('Reverse Number: ',reverse);

// Qs4. Print the factorial of a number n.
// [Factorial of a number n is the product of all positive integers less than or equal to a
// given positive integer and denoted by that integer. ]
// Example :
// 7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
// 5! (factorial of 5) = 1x2x3x4x5 = 120
// 3! (factorial of 3) = 1x2x3 = 6
// 0! Is always 1
let numFactorial = 7;
factorial = 1;
for(let i=1;i<=numFactorial;i++){
    factorial = factorial * i ;
}
console.log('factorial number: ',factorial);

//Qs5. Find the largest number in an array with only positive numbers.
let array = [-15,-89,-65,-7,-85,-6];
let largestNum = array[0];
for(let i=1;i<array.length;i++){
    if(array[i]>largestNum){
        largestNum=array[i];
    }
} 
console.log('Largest No: ',largestNum);

//Qs6. Find the Smallest number in an array .
let smallestNum = array[0];
for(let i=0;i<array.length;i++){
    if(array[i]<smallestNum){
        smallestNum=array[i];
    }
}
console.log('Smallest No: ',smallestNum);
