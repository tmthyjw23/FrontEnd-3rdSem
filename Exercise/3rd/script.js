let people = ["Greg", "Mary", "Devon", "James"];

//  1. Using a for-loop, iterate through this array and console.log all of the people.
console.log("\nUsing for-loop:");
for (let i = 0; i < people.length; i++) {
    console.log(`"${people[i]}"`);
}

//  2.Using a forEach(), iterate through this array and console.log all of the people.
console.log("\nUsing forEach:");
people.forEach(function(people) {
    console.log(`"${people}"`); 
});

//  3. Write the command to remove "Greg" from the array.
console.log("\nRemove Greg:");
people.shift();
people.forEach(function(people) {
    console.log(`"${people}"`); 
});

//  4. Write the command to remove "James" from the array.
console.log("\nRemove James:");
people.pop();
people.forEach(function(people) {
    console.log(`"${people}"`); 
});

//  5. Write the command to add "Matt" to the front of the array.
console.log("\nAdd Matt:");
people.unshift("Matt");
people.forEach(function(people) {
    console.log(`"${people}"`); 
});

//  6. Write the command to add "Timothy" to the end of the array.
console.log("\nAdd Timothy:");
people.push("Timothy");
people.forEach(function(people) {
    console.log(`"${people}"`); 
});

//  7.Using a for-loop, iterate through this array and after console.log-ing "Mary", exit from the loop. (hint: use break keyword to exit loop)
console.log("\nUsing for-loop with break:");
for (let i = 0; i < people.length; i++) {
    console.log(`"${people[i]}"`);
    if (people[i] === "Mary") {
        console.log("Exiting loop...");
        break;
    }
}

//  8. Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
console.log("\nbefore:");
for (let i = 0; i < people.length; i++) {
    console.log(`"${people[i]}"`);
}

console.log("\nCopy array without Mary and Matt:");
let peopleCopy = people.slice(2, 4);
for (let i = 0; i < peopleCopy.length; i++) {
    console.log(`"${peopleCopy[i]}"`);
}

//  9. Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Matt", "Mary", "Elizabeth", "Artie", "Your Name"].
console.log("\nRedefine people and modify with splice:");   
people.splice(2, 1, "Elizabeth", "Artie");
people.forEach(function(people) {
    console.log(`"${people}"`);
});

//  10. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
console.log("\nUsing concat:");
withBob = "Bob";
semua = people.concat(withBob);
for (let i = 0; i < semua.length; i++) {
    console.log(`${semua[i]}`);
}

