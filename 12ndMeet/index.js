// 1. Destructuring Array
const Num = [1, 2, 3, 4]; //Structuring

// lakukan destrukturisasi (ARRAY)
// const [Num1, Num2, Num3] = Num; // ES6

// console.log(Num1, Num2, Num3); 

// Destructuring sebagian item (ARRAY)
const [, , Num3, ] = Num; // ES6

console.log(Num3); 

// Destructuring menggunakan Rest Parameter
const [Num1, Num2, ...rest ] = Num; // ES6

console.log(Num1, Num2, rest); 


// 2. Destructuring Object 
const student = {
    fName : "tmthy",
    age : 19,
    stat : "Active",
};

// const {fName, age, stat} = student ;
// console.log(fName, age, stat)

//  - sebagian item 

const {fName} = student
console.log(fName)

// w/ rest parameter
const {age, ...sisa} = student ;
console.log(age, sisa)

