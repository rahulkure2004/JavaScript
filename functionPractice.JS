//Qs1. Write a JavaScript function that returns array elements larger than a number.
function larger(arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i])
        }
    }
}
let arr = [-10,2,6,-50,8,5,6,9];
let num =5;
console.log(larger(arr,num));

//Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”

function uniqCharacter(str){
    let ans ="";
    for(let i=0;i<str.length;i++){
        if(!ans.includes(str[i])){
            ans +=str[i];
        }
    }
    return ans;

}
let str = "abcdabcdefgggh";
console.log(uniqCharacter(str));


// Qs3. Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] output :
// "United States of America"
let country = ["Australia", "Germany", "United States of America"];
function longestCountryName(country){
    let ansIdx = 0;
    for(let i=0;i<country.length;i++){
        if(country[ansIdx].length < country[i].length){
            ansIdx = i;
        }
    }
    return country[ansIdx];
}
console.log(longestCountryName(country));

//Qs4. Write a JavaScript function to count the number of vowels in a String argument.
function countVowels(str){
    let count = 0;
    for(let i=0;i<str.length;i++){
        if(str[i]== 'a' || str[i]== 'e' || str[i]== 'i' || str[i]== 'o' || str[i]== 'u'){
            count ++;
        }
    }
    return count;
}
let strs = 'apanaCollege';
console.log("Count vowels: ",countVowels(strs));

//Qs5. Write a JavaScript function to generate a random number within a range (start, end).
function randomNumberGenerate(start, end){
    let random = Math.floor(start + Math.random() * end);
    return random;
}
console.log("Random Generate Number: ",randomNumberGenerate(100,200));