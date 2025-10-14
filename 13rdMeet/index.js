// Synchronous -> single thread -> blocking
// console.log("Proses 1")
// console.log("Proses 2")
// console.log("Proses 3") // Jika proses ini memakan waktu yang lama maka akan terblock, proses ke 4 belum akan di proses
// console.log("Proses 4")


// Asynchronous JS -> multi thread -> nonblocking
// 1. Parallel -> Mulainya sama sama dan stopnya berbeda beda (executenya)
console.log("Multithread")
setTimeout(() => {console.log("Proses 1")}, 2000 )
setTimeout(() => {console.log("Proses 2")}, 3000 )
setTimeout(() => {console.log("Proses 3")}, 4000 )
setTimeout(() => {console.log("Proses 4")}, 1000 )


// 2. concurrent -> berjalan berurutan
// setTimeout(() => {
//     console.log("Proses 1");
//         setTimeout(() => {
//         console.log("Proses 1");
//                 setTimeout(() => {
//             console.log("Proses 1"); 
//         },2000 );
//     },2000 );   
// },2000 );

// Promise (ES6)
let condition = true
const newPromise = new Promise((resolve, reject) => {
    if(condition) {
        resolve("Berhasil");
    } else{
        reject("Gagal");
    }
});
//cara menggunakan promise
//1. then - catch

/*/
newPromise.then((result) => {
    console.log(result);
});
/*/

newPromise
    .then((result) => `${result} !!!`)
    .then((result2) => console.log(result2))
    .catch((error) => console.log(error));

    
// 2. Async/await 
// harus buat dalam fungsi
const getPromise = async () => {
    {const result = await newPromise;
    console.log(result)}
}

getPromise()
