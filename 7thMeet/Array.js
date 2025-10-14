// Array Built-in Methods

let numbers = [1, 2, 3, 4, 5]; //membuat array dengan elemen 1-10
console.log(numbers); // tampilkan sekaligus

//cara lama
for (let i = 0; i < numbers.length; i++) { //Menampilkan satu per satu
    console.log('index ke-' + i + ': ' + numbers[i]);
}

// 1. forEach() -> untuk menampilkan satu per satu
console.log('\nforEach()');
numbers.forEach(function (value, index) {
    console.log('index ke-' + (index + 1) + ': ' + (value + 1));
});

// 2. join() -> menggabungkan semua elemen array menjadi string
console.log('\njoin()');
let gabung = numbers.join(' - '); //menggabungkan dengan pemisah ' - '
console.log(gabung);

// 3. map() -> membuat array baru dengan memodifikasi elemen array lama
console.log('\nmap()');
let angkaBaru = numbers.map(function (value) {
    return value * 2; //mengalikan setiap elemen dengan 2
});
console.log(angkaBaru.join(' - '));


// 4. filter() -> membuat array baru dengan elemen yang memenuhi kondisi tertentu
console.log('\nfilter()');
let angkaFilter = numbers.filter(function (value) {
    return value > 2; //mengambil elemen yang lebih besar dari 2
});
console.log(angkaFilter.join(' - '));

// 5. find() -> mencari elemen pertama yang memenuhi kondisi tertentu
console.log('\nfind()');
let angkaFind = numbers.find(function (value) {
    return value >= 2; //mencari elemen yang lebih besar dari 2
});
console.log(angkaFind);

// 6. reduce() -> menggabungkan semua elemen menjadi satu nilai
console.log('\nreduce()');
let angkaReduce = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log(angkaReduce);