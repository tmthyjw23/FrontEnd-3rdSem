// // ===================================Variable===========================================
// let fullName = "Timothy" //camel case
// let full_name = "Timothy"//snake case
// let FullName = "Timothy" //pascal case

// console.log(fullName)

// // Tipe Data 
// const name = "Timothy" //String
// let age = 19 //Number Integer
// let weight = 68.8 //Number Float
// let isMarried = false //Boolean
// let grade = null 
// let address //Undefined

// console.log(name, age, weight, isMarried, grade, address)


// // =====================================Operator==============================================
// //  a. Arithmatic Operator (+, -, *, /, %, **)
// let bil1 = 3
// let bil2 = 2

// console.log(bil1 + bil2) 
// console.log(bil1 -bil2)
// console.log(bil1 * bil2)
// console.log(bil1 / bil2)
// console.log(bil1 % bil2)
// console.log(bil1 ** bil2)

// //Mini Exercise 
// // Buat Program yang menghitung luas Segitiga. Alas = 5, Tinggi = 5
// let alas = 5
// let tinggi = 5 
// const luasSegitiga =  (alas * tinggi)/2
// console.log(`Luas Segitiga adalah (${alas} * ${tinggi})/${2} = ${luasSegitiga}`)


// //  b. Assignment Operator (=, +=, -=, *=, /=)
// let bilangan = 10
// bilangan += 10
// console.log(bilangan)

// //  c. String Operaror (+)
// let firstName = "Timothy"
// let lastName = "Weley"
// let fullName = firstName + lastName //concatination

// console.log(fullName)

// //  d. Relational Operator (==, ===, <=, >=, <, > )
// let bil1 = 5
// let bil2 ="5"

// console.log(bil1==bil2) //mengecek hanya nilai(tidak tipe datanya)
// console.log(bil1===bil2) //mengecek tipe datanya

// //  e. Logical Operator (&&, ||, not) [And, Or, Not]
// console.log(true && true)
// console.log(true || true)
// console.log(!true)


// //  f. Ternary Operator (?, :)
// let age = 17
// let isEligible = age >= 17 ? "Bisa buat KTP" : "Belum bisa"
// console.log(isEligible)


//  Mini Exercise 
// Buat Program untuk menghitung BMI (BB / (TB))

document.addEventListener("DOMContentLoaded", function() {
    let tb = 1.69;
    let bb = 69;
    const BMI = bb / (tb * tb);
    let hasil = BMI < 25 ? `Berat badan Anda Normal: ${BMI.toFixed(1)}` : "Anda kelebihan Berat Badan";
    
    const output = document.getElementById("output"); // Pastikan variabel 'output' didefinisikan
    output.textContent = hasil;
});