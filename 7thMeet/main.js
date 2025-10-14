// Javascript Loop
// 1. For Loop
let angka = [];
console.log('Angka: ' + angka)
for (let i = 0; i < 10; i++) {
    console.log("Perulangan ke-" + i);
    angka.push(i);
}
console.log('Angka: ' + angka)

// 2. While Loop
let angka2 = [];
console.log('\nAngka2: ' + angka2)
let j = 1;
while (j <= 5) {
    console.log("Perulangan ke-" + j);
    angka2.push(j);
    j += 2;
}
console.log('Angka2: ' + angka2)


// 3. Do...While Loop
let angka3 = [];
console.log('\nAngka3: ' + angka3)
let k = 1;
do {
    console.log("Perulangan ke-" + k);
    angka3.push(k);
    k+= 3;
} while (k <= 15);
console.log('Angka3: ' + angka3)
