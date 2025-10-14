//============================================================Object=================================
// cara deklarasi object
let Timo = {
    name: "Timothy Weley",
    age: 19,
    isStudent: true,
    history : ["SD Advent", "SMP Advent", "SMA Advent"],
    add: {
        city: "Timika",
        Province: "Central Papua",
        street: "Jalan Baru",
    },
    sayHello: function() {
        return `Halo, nama saya ${this.name}`;
    }
}

//calling
// 1. Dot Notation
console.log(Timo.name);
console.log(Timo.age);
console.log(Timo.isStudent);
console.log(Timo.add.city);
console.log(Timo.add.Province);
console.log(Timo.history[1]);
console.log(Timo.sayHello());

// 2. Bracket Notation 
console.log(Timo['name']);
console.log(Timo['age']);
console.log(Timo['isStudent']);
console.log(Timo['add']['city']);
console.log(Timo['add']['Province']);
console.log(Timo['history'][1]);
console.log(Timo['sayHello']()); //pemanggilan method


//tambah Properti
Timo.hobby = "programming";
console.log(Timo)

//delete Properti dalam object;
delete Timo.hobby;
console.log(Timo)

let keluar = `${Timo.name} tinggal di ${Timo.add.city}, ${Timo.add.Province}`
let keluar1 = Timo.sayHello();


// menampilkan output
document.addEventListener("DOMContentLoaded", function() {

    const output = document.getElementById("output"); // Pastikan variabel 'output' didefinisikan
    output.textContent = keluar1;
});
