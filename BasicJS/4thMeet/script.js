// JavaScript function

// 1. Function Declaration
function greetings(){
    return (
        console.log("Hello World")
    )
}
greetings() // call function


//2. Function Declaration
let sayHallo = function (){
    console.log("Hallo gess")
}
sayHallo()


// Function with Return Value (output) and argument (input)
function sayUser(user){
    return "Haii " + user
}

let halo = sayUser("Timothy")
let hei = sayUser("Ganteng")
console.log(halo)


// Global, Local, Block Scope Variable
let Timo = "ganteng"  //Globall Variable
function p(){
    let jelek = "jelek" // Local Variable
    return "Timothy " + Timo

    if(true){
        let z = 10 //Block Variable
        console.log(z)
    }
}

// Mini Exercise 
// Fungsi menghitung BMI input adalah berat dan tinggi ouputnya BMI

function menghitungBMI(tinggi, berat){
    BMI = berat/tinggi**2

    if (BMI < 18.5) {
        kategori = "Kurus";
    } else if (BMI >= 18.5 && BMI <= 22.9) {
        kategori = "Normal";
    } else if (BMI >= 23 && BMI <= 24.9) {
        kategori = "Overweight (pra-obesitas)";
    } else if (BMI >= 25 && BMI <= 29.9) {
        kategori = "Obesitas tingkat I";
    } else if (BMI >= 30) {
        kategori = "Obesitas tingkat II";
    } else {
        kategori = "Data tidak valid";
    }

    return `BMI Anda adalah ${BMI.toFixed(2)}\nAnda termasuk dalam kategori: ${kategori}`
}


let keluar = menghitungBMI(1.70, 68)

// menampilkan output
document.addEventListener("DOMContentLoaded", function() {

    
    const output = document.getElementById("output"); // Pastikan variabel 'output' didefinisikan
    output.textContent = keluar;
});