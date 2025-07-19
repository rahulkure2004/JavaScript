//setTimeOut Function
console.log('Timeout function !!');
let TiomeoutFunction = () => {
    console.log('Timeout function executed after 2 sec!!');
}
setTimeout(TiomeoutFunction, 2000);

setTimeout(() => {
    console.log('Timeout function executed after 4 sec!!');
}, 4000);

//setInterval Function
let id = setInterval(() => {
    console.log('setInterval function executed after 2 sec!!');
}, 2000);
// stop =>
clearInterval(id);


const person = {
    name: "John",
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}.`); //ha object cha this geto
    },
    sayHelloArrow: () => {
        console.log(`Hello, my name is ${this.name}.`); //ha parent cha object(window ahe) cha this geto
    },
};
person.sayHello(); // Output: Hello, my name is John.
person.sayHelloArrow(); // Output: Hello, my name is undefined

//Write a arrow function that returns the square of a number 'n'.

let square = n => {
    let SquareStore = n*n;
    return SquareStore;
}
let n = 2;
console.log(`Square of ${n} is: ${square(n)} `);

//Write a function that prints "Hello World" 5 times at intervals of 2s each.
let id2 = setInterval( () =>{
    console.log('Hello World!!')
},2000);

setTimeout( () =>{
    clearInterval(id2)
},10000);