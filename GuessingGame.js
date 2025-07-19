//User enters a max number & then tries to guess a random gererated number between 1 to max
const max = prompt('Please enter the max number');
const random = Math.floor(Math.random() * max)+1;
// console.log(random);/
let guess = prompt('please enter your a guess number ');
while(true){
    if(guess=='quit'){
        console.log('your quit the game!!');
        break;
    }
    if(guess==random){
        console.log('congratualation your right guess random number was: ',random);
        break;
    }
    else if(guess<random){
        guess= prompt('Your guess was too samall. Please try again!!')
    }
    else{
        guess = prompt('Your guess was too large, Please try again!!');
    }
}