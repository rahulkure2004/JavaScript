//create an object litral for the properties of thred / twitter post which includes-
//1.userName,2.content,3.likes,4.reports,5.tags

const twitter = {
    userName : 'rahul@12',
    content : 'This is my first post',
    likes: 200,
    reports :  10,
    tags : ['vivek','anand','aman']
};
console.log(twitter);  

//Nested Objects
const classInfo = {
    rahul : {
        marks : 85,
        city : {
            pincode : 412208,
            name : 'Pune'
        }
    },
    vivek : {
        marks : 80,
        city : {
            pincode : 412208,
            name : 'Pune'
        }
    },
    aman : {
        marks : 95,
        city : {
            pincode : 412208,
            name : 'Mumbai'
        }
    }

};
console.log(classInfo);

//Array of Objects
const classInformation = [
    {
        name: 'Rahul',
        city: 'Pune',
        marks: 89
    },
    {
         name: 'Vivek',
        city: 'Mumbai',
        marks: 95
    },
    {
        name: 'Anand',
        city: 'Pune',
        marks: 45
    }
];
console.log(classInformation);
console.log(classInformation[0]);
console.log(classInformation[1].gender = 'Male');
console.log(classInformation[1]);
console.log(classInformation[2]);



//Generates OTP
let otp = Math.floor(1000 + Math.random() * 9000);
console.log("Your OTP: " + otp);


//Min and Max
let marks = [80, 90, 85, 70];
console.log("Max Marks:", Math.max(...marks));
console.log("Min Marks:", Math.min(...marks));

