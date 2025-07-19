//simple for loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
}


//Even Number
console.log('Even Solution 1')
for (let i = 1; i <= 15; i++) {
    if (i % 2 == 0) {
        console.log('Even no is: ', i)
    }
}
//solution 2
console.log('Even Solution 2')
for (let i = 2; i <= 15; i = i + 2) {
    console.log('Even no is: ', i)
}
//odd Number
console.log('Odd Solution 1')
for (let i = 1; i <= 15; i++) {
    if (i % 2 != 0) {
        console.log('Odd no is: ', i)
    }
}

//solution 2
console.log('Odd Solution 2')
for (let i = 1; i <= 15; i = i + 2) {
    console.log('Odd no is: ', i)
}

//Print multiplication Table
let table = 5;
console.log("Table");
for (let i = 1; i <= 10; i++) {
    console.log(`${5}*${i} = ${5 * i}`);
}

//Favorite Movie game
const Favorite = 'Dj';
let guess = prompt('Guess my Favorite Movie: ')
while (Favorite != guess) {
    if (guess == 'quit') {
        console.log('Quit game');
        break;
    }
    guess = prompt('Wrong guess, Please try again: ');
}
if (Favorite === guess) {
    console.log('Congratualation')
}


//Nested Array
let colors = [['red','blue','green','white'],['black','yellow','pink']];
console.log('------------Using for loop------');
for(let i=0;i<colors.length;i++){
    console.log(`List #${i}`);
    for(let j=0;j<colors[i].length;j++){
        console.log(colors[i][j]);
    }
}

//for of loop
console.log('------------Using for of loop------');
for(listColor of colors){
    for(color of listColor){
        console.log(color);
    }
}
