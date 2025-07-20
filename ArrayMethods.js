//forEach method
function num(el){
    console.log(el);
}
let arr = [1,2,3,4,5];
arr.forEach(num);

//OR

arr.forEach( (el) =>{
    console.log(el);
});


//Map method
let marks = [98,65,88,63,77];
let avrage = marks.map( (el) =>{
    return el+el;
});
console.log(avrage);

//filter function
let nums = [1,2,58,9,6,75,15,27,8,6,53,26,58,45];
let ansEven = nums.filter( (el) =>{
    return (el%2==0);    //True-->even and False-->odd
});
console.log("Even: ",ansEven);

//5 grater than num
let ans = nums.filter( (el) =>{
    return 20 > el;
});
console.log('5 grater than num: ',ans);


//every and some methods
let number = [1,2,3,4,5,6];
let allEven = number.every((el) => el%2==0);
console.log(allEven);
let someEven = number.some( (el) => el%2==0);
console.log(someEven);

//reduce method
let numberRduce = [1,2,3,4,5,6,7,8,9,10];
let reduceNum = numberRduce.reduce( (result, el) =>{
    return result+el;
});
console.log("reduce array sum: ",reduceNum);


//Find Maximum in an array
let numArray = [20,89,56,78,502,3];
let result = numArray.reduce((max,el) =>{
    if(max<el){
        return el;
    }
    else{
        return max;
    }
});
console.log("Maximum number in an Array: ",result);

//Check if all numbers in our array are multiples of 10 or not.
let newArray= [10,20,30,45];
let multiplesResult = newArray.every((el) => el%10==0);
console.log("our array are multiples of 10",multiplesResult);

//Create a function to find the min number in an array.
let minResult = numArray.reduce((min,el) =>{
    if(min>el){
        return el;
    }
    else{
        return min;
    }
});
console.log("Minimum number in an Array: ",minResult);