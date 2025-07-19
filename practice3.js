
//Qs1. Create a number variable num with some value.
// Now, print "good" if the number is divisible by 10 and print "bad" if it is not.

let num = 20;
if(num%10==0){
    console.log("Good");
}
else{
    console.log("Bad");
}

// Qs2. Take the user's name & age as input using prompts.
// Then return back the following statement to the user as an alert (by substituting their name & age) :
// name is age years old.
// [Use template Literals to print this sentence]

 let name = prompt("Enter the name: ");
 let age = prompt("Enter the age: ");
 let msg = `${name} is ${age} years old.`;
 alert(msg);

//  Qs3. Write a switch statement to print the months in a quarter.
// Months in Quarter 1: January, February, March
// Months in Quarter 2: April, May, June
// Months in Quarter 3: July, August, September
// Months in Quarter 4: October, November, December
// [Use the number as the case value in switch]

let months = 1;
switch(months){
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default:
        console.log("Not a Quarter");
}

// Qs4. A string is a golden string if it starts with the character 'A' or 'a' and has a total length greater than 5.
// For a given string print if it is golden or not.

let str = "apples";
if(str[0]=='A' || str[0]=='a' && (str.length>5)){
    console.log("It is Golden");
}
else{
    console.log("It is not Golden");
}

//Qs5. Write a program to find the largest of 3 numbers.

let a=5, b=18, c=13;
if(a>b && a>c){
    console.log(a," is Largest");
}
else if(b>a && b>c){
    console.log(b," is Largest");
}
else{
    console.log(c," is Largest");
}

//Qs6 (Bonus). Write a program to check if 2 numbers have the same last digit.
// Eg: 32 and 47852 have the same last digit i.e. 2

let num1 = 32;
let num2 = 47852;
if((num1%10)==(num2%10)){
    console.log('Have the same last digit is ',num1%10);
}
else{
    console.log("Can not same last digit ",num2%10)
}


//Q1 Swap two numbers using a temporary variable

let p = 10;
let q = 5;
let temp = p;
p = q;
q = temp;
console.log('p',p);
console.log('q',q);
