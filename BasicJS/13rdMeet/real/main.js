// simulasi fetch data API

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => console.log(json))

// Mini Exercise 
// ganti fetch (then - catch) menjadi async/await



const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();
    json.forEach(({ name }) => console.log(name));
};

getData();
