let color = 'yellow';

//Traffic Light System
if (color == 'red') {
    console.log("Stop");
}
if (color == 'yellow') {
    console.log("Go Slow");
}
if (color == 'green') {
    console.log("Go");

}


let marks = 98;

if (marks >= 90) {
    console.log("A+")
}
else if (marks >= 80) {
    console.log("A");
}
else if (marks >= 60) {
    console.log("B");
}
else if (marks >= 50) {
    console.log("B+");
}
else if (marks <= 40) {
    console.log("Faill");
}


let age = 25;

if (age >= 18) {
    console.log("You can Vote")
}
else {
    console.log("You can not vote")
}


//Create a System to calculate popcorn prices based on the size customer asked for: 

let customer = 'M';

if (customer === 'XL') {
    console.log("Popcorn price is: Rs. 250");
}
else if (customer === 'L') {
    console.log("Popcorn price is: Rs. 200");
}
else if (customer === 'M') {
    console.log("Popcorn price is: Rs. 100");
}
else if (customer === 'S') {
    console.log("Popcorn price is: Rs. 50");
}
else {
    console.log("Not avilable size for popcorn");
}



//Switch statement
//Example 1
let TrafficColor = 'red';
switch(TrafficColor){
    case 'red':
        console.log("Stop!");
        break;
    case 'yellow':
        console.log("Go Slow!");
        break;
    case 'green':
        console.log("Go!");
        break;
    default:
        console.log("Broken Light!")
}

//Example 2
//Print the Day witb the Week

let day = 5;
switch(day){
    case 1 :
        console.log("Monday");
        break;
    case 2 :
        console.log("Thusday");
        break;
    case 3 :
        console.log("Wensday");
        break;
    case 4 :
        console.log("Thusrday");
        break;
    case 5 :
        console.log("Saturday");
        break;
    case 6 :
        console.log("Friday");
        break;
    case 7 :
        console.log("Sunday");
        break;
    default:
        console.log("Wrong a day");
    
}


alert("danger website");
let name = prompt("Enter the Name: ");
console.log(name);


