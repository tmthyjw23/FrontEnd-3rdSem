// JavaScript w/ node.js

// IIFE
let IIFE = (function (tb, bb){
    const BMI = bb / (tb * tb);
    return `Berat BMI Anda adalah : ${BMI.toFixed(2)}`
})(1.69, 69);

// Callback
function BMI(bmi){
    let rumus = bmi(68, 1.69)
    return rumus
};

let Callback = BMI(function (BB, TB) {
    let bmi = BB / (TB * TB )
    return `Berat BMI Anda adalah : ${bmi.toFixed(2)}`
});


console.log("Output menggunakkan IIFE -> ", IIFE)
console.log("Output menggunakkan Callback -> ", Callback)