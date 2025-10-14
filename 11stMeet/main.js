// Rest Parameter & Spread Operator (notasi ...)

// 1. Rest Parameter
// -----> rest parameter bertipe array
// -----> rest parameter harus di posisi terakhir
const funct1 = (Param1, Param2, ...rest) => {
    // let array = [Param1, Param2, Param3, Param4, Param5]; 
    let result = 0 + Param1 + Param2;
    rest.forEach((item) => (result += item))
    console.log(result);
};
funct1(1,2,3,4,5,6,7,8,9,10);


// 2. Spread Operator
// berkaitan dengan array dan object
const  Num = [1,2,3];
console.log(Num); // 1 2 3
console.log(...Num); // 1 2 3

// Kegunaan Spread Operator pada Array
// 1. Duplikasi Array
const Num2 = [...Num];
// Num.push(4,5,6);
console.log(Num2); // 1 2 3 4 5 6

// 2. Menggabungkan 2 Array atau lebih
const Num3 = [4,5,6];
const Num4 = [...Num, ...Num3];
console.log(Num4); // 1 2 3 4 5 6

// 3. duplikasi Object
const person = {
    name: "John",
    age: 30
};
const person2 = {...person, address: "Manado"};
console.log(person2); // {name: "John", age: 30, address: "Manado"}

// 4. Menggabungkan 2 Object atau lebih
const obj1 = {
    a: 1,
    b: 2
};
const obj2 = {
    c: 3,
    d: 4
};
const combObj = {...obj1, ...obj2};
console.log(combObj); // {a: 1, b: 2, c: 3, d: 4}