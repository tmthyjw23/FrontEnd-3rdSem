let suhu = Array.from({length: 50}, (_, i) => i + 1); // Membuat array [1,2,3,...,50]

// Memilih elemen acak dari array
let suhuTimbul = suhu[Math.floor(Math.random() * suhu.length)];

console.log(suhuTimbul); // Output: suhu random dari array

// 1.Javascript Conditional

if (suhuTimbul >= 38 ) {
    console.log("Suhu diluar panas");
} else {
    console.log("Suhu normal");
}
console.log("selesai");

// Else If
let umur = Array.from({length: 70}, (_, i) => i + 1); // Membuat array [1,2,3,...,70]
let umurTimbul = umur[Math.floor(Math.random() * umur.length)];
console.log("\n" + umurTimbul);

// if (umurTimbul >= 0 && umurTimbul <= 5) {
//     console.log("Balita");
// } else if (umurTimbul >= 5 && umurTimbul <= 12) {
//     console.log("Anak-anak");
// } else if (umurTimbul >= 12 && umurTimbul <= 17) {
//     console.log("Remaja");
// } else if (umurTimbul >= 18 && umurTimbul <= 24) {
//     console.log("Anak muda");
// } else if (umurTimbul >= 25 && umurTimbul <= 55) {
//     console.log("Dewasa");
// } else if (umurTimbul >= 56) {
//     console.log("Lansia");
// }else {
//     console.log("Tidak dalam range umur");
// }
// console.log("selesai");


// Switch Case
switch (umurTimbul) {
    case (umurTimbul >= 0 && umurTimbul <= 5):
        console.log("Balita");
        break;
    case (umurTimbul >= 5 && umurTimbul <= 12):
        console.log("Anak-anak");
        break;
    case (umurTimbul >= 12 && umurTimbul <= 17):
        console.log("Remaja");
        break;
    case (umurTimbul >= 18 && umurTimbul <= 24):
        console.log("Anak muda");
        break;
    case (umurTimbul >= 25 && umurTimbul <= 55):
        console.log("Dewasa");
        break;
    case (umurTimbul >= 56):
        console.log("Lansia");
        break;
    default:
        console.log("Tidak dalam range umur");
}
console.log("selesai");


let hari = Array.from({length: 7}, (_, i) => i + 1); // Membuat array [1,2,3,...,7]
let hariTimbul = hari[Math.floor(Math.random() * hari.length)];
console.log("\n" + "Hari ke-" + hariTimbul + " adalah");
switch (hariTimbul) {
    case 1:
        console.log("Minggu");
        break;
    case 2:
        console.log("Senin");
        break;
    case 3:
        console.log("Selasa");
        break;
    case 4:
        console.log("Rabu");
        break;
    case 5:
        console.log("Kamis");
        break;
    case 6:
        console.log("Jumat");
        break;
    case 7:
        console.log("Sabtu");
        break;
    default:
        console.log("Tidak dalam range hari");
}