// =====================================================Array & Object in JS===========================================
//1. Array Literal
let student = ["Timo", "Udin", "Valdo", ] 
let arr = ["hey", 19, true, [40, 20]]



//2. Array dengan kata kunci "new"
let employees = new Array("John", "siapa", "dimana")
employees[0] = "Doe" //mengubah elemen array
employees[3] = "array baru" //menambah elemen array


console.log(employees[employees.length - 1 ]); // Mengakses array terakhir
console.log(arr[3])//mengakses array multidimensi
console.log(arr[3][0])//mengakses elemen dalam array di dalam array
console.log(student.length)//mengakses array dengan new

//                                                          Array Method                                         
let arrBaru = [1, 3, "5", "7", 9, false, true ];
//1. toString()
console.log(arrBaru.toString()); // output: 1,3,5,7,9,false,true

//2. join()
console.log(arrBaru.join(" - ")); // output: 1 - 3 - 5 - 7 - 9 - false - true

//3. pop()  - hapus elemen terakhir
console.log(arrBaru.pop()); // output: true
console.log(arrBaru); // output: [1, 3, "5", "7", 9, false]

//4. push() - tambah array baru
console.log(arrBaru.push("array baru"));
console.log(arrBaru); // output: [1, 3, "5", "7", 9, false, "array baru"]

//5. shift() - hapus elemen pertama
console.log(arrBaru.shift()); // output: 1
console.log(arrBaru); // output: [3, "5", "7", 9, false, "array baru"]  

//6. unshift() - tambah array di index ke 0
console.log(arrBaru.unshift("array baru"));
console.log(arrBaru);

//7. splice() - menghapus atau menambah elemen
arrBaru.splice(2, 0, 4); // output: [] --> (menambah ke index keberapa, hapus berapa, ganti dengan apa/tambah apa)
console.log(arrBaru); // output: [3, 4, "array baru", "7", 9, false, "array baru"]

let myArr = [4, 5, 6, 4, 1, 12, ];

//8. slice() - mengambil sebagian array
let num = myArr.slice(3); // output: [4, 1, 12] --> (dari index keberapa)
let num1 = myArr.slice(1, 5);
console.log(num);
console.log(num1);
console.log(myArr.slice(2, 5)); // output: [6, 4, 1] --> (dari index keberapa, sampai index keberapa (tidak termasuk index keberapa))

//9. concat()
let stName = "Timothy"
let ndName = "Jordy"
let thName = "Weley"
let fullName= stName.concat(ndName, thName);
console.log(fullName);


let keluar = "output:"

// menampilkan output
document.addEventListener("DOMContentLoaded", function() {

    const output = document.getElementById("output"); // Pastikan variabel 'output' didefinisikan
    output.textContent = keluar;
});
