//Ubahlah syntax ES5 berikut ke dalam ES6

//1
const calculateAge = (birthYear) => 2025 - birthYear;
// Call 
// console.log(`Umur Anda di tahun 2025 adalah ${calculateAge(2006)} tahun.`);

// const yearUntilRetirement = ({year: 2006, firstName: `Timothy`}) => { //--> destructuring (hapus keyword "object")
const yearUntilRetirement = (object) => {
	const age = calculateAge(object.year);
	let retirement = 60 - age;

	if(retirement > 0){
        console.log(`${object.firstName} retires in ${retirement} years`);
	} else {
        console.log(`${object.firstName} is already retired.`);
	}
}
// yearUntilRetirement(); //--> destructuring
yearUntilRetirement({year: 2006, firstName: `Timothy`});

//2.
const addNumber = (a, b, c, d, e, f, g) => {
    const numbers = [a, b, c, d, e, f, g];
    let sum = 0;
    //Change to map function
    numbers.map((num) => {
        sum += num;
    });
    return sum;
};

console.log(addNumber(1,2,3,4,5,6,7));

//3.

const phi = 3.14;
const power = 2;
const radius = 0;

const calculateArea = (obj) => phi * Math.pow(obj.radius, obj.power);

const area21 = calculateArea({radius: 21, power: 2 });

const area7 = calculateArea({radius: 7, power: 2});

console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// 4.
const makeAjaxRequest = (url, method = `GET`) => {
console.log(url, method);
}

makeAjaxRequest(`www.google.com`);