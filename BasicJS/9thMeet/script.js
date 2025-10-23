// String Literal, Arrow Function & Default Parameter

// 1. String Literal
let fullName = "Timothy Jordy Weley"
let age = 19
let address = "Manado"
// cara lama 
let kalimat = "Halo nama saya " + fullName + ", umur saya " + (age+1) + ", dan saya tinggal di " + address


// cara baru
let kalimat1 = `Hai Nama Saya ${fullName}, Saya tinggal di ${address}, umur Saya ${age} Tahun.`
// console.log(kalimat)

// 2. Arrow Function
// cara biasa
function greet(name) {
    return `Halo, ${name}!`
}
// console.log(greet("Timothy"))

// cara baru (memiliki Implicit return value)
const sayHallo = (name) => `Halo, ${name}!`
// console.log(sayHallo("Timothy (Arrow)"))

// ArrowFunct pada Callback
let numbers = [1, 2, 3, 4, 5]
// cara biasa
let biasa = numbers.map(function(num) {
    return num * 2
})
// cara baru
let baru = numbers.map(num => num * 2)
// console.log(biasa)
// console.log(baru)

// ArrowFunct pada IIFE
let output = (() => `Hello`)();
// console.log(output)

// Default Parameter
const sayHai = (Name = "tidak diketahui", umur = 0, almt = "(tidak diketahui)") =>
    `Hai, Nama Saya ${Name}, Umur Saya ${umur}, dan Saya Tinggal di ${almt}`
console.log(sayHai("timo"))