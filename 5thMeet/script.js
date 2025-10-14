//====================================================IIFE & Callback==================================================
// 1. IIFE ( Immediately Invoked Function Expression ) / Self-Executing Anonymous Function
(function (){
    console.log("Hai");
})();

let outPut = (function (fullName){ // with parameter
    return "Hello " + fullName;
})("Moti"); // argumen

console.log(outPut) //pemanggilannya

// 2. Callback Function -> Fungsi yang di passing ke fungsi lain sebagai argumen
// outer func
function greetings(callBack){
    callBack();
};
// Callback 
greetings(function () { //fungsi yang sebagai arg harus berupa anonymous/IIFE
    console.log("Hello Callback")
});

// Callback function with parameter & return value
function greetings2(callBack){
    let nama = callBack("Timo");
    return nama
};
let keluar = greetings2(function (name) { //fungsi yang sebagai arg harus berupa anonymous/IIFE
    return "Hello " + name;
});



// menampilkan output
document.addEventListener("DOMContentLoaded", function() {

    const output = document.getElementById("output"); // Pastikan variabel 'output' didefinisikan
    output.textContent = keluar;
});
