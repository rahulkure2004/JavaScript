//Using trim() method
let str = '                  Rahul Kure             ';
console.log('Before string: ',str)
let newStr = str.trim();
console.log("After string: ",newStr); //direct new string create

//Using UpperCase method and LowerCase Method
console.log("toUppercase: ",newStr.toUpperCase());
console.log("toLowercase: ",newStr.toLowerCase());

//String Arguments
console.log(newStr.indexOf('K'));
console.log(newStr.indexOf('a'));
console.log(newStr.indexOf('A'));

//Chainnig methood
let strNew = "  Rahul Kure          ";
console.log(strNew.trim().toUpperCase());

//Practice Questions
let msg = "  help! ";
console.log("Trim and toUpperCase method: ",msg.trim().toUpperCase());

let name = "ApnaCollege";
console.log("slice metod: "+name.slice(4,9));
console.log("indexOf method: ",name.indexOf('na'));
console.log("replace method: ",name.replace("Apna","Our"));

let separteStr = name.slice(4);
console.log("Separate String: ",separteStr);
console.log("replace 'l' with 't': ",separteStr.replace("l","t"));