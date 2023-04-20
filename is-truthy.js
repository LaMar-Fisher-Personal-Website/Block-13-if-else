// Define the value to be checked
var value = null;

// Check if the value is truthy or falsy and print the corresponding result
if (value) {
    console.log(true);
} else if (value === false) {
    console.log("The boolean value false is falsy");
} else if (value === null) {
    console.log("The null value is falsy");
} else if (value === undefined) {
    console.log("undefined is falsy");
} else if (value === 0) {
    console.log("The number 0 is falsy (the only falsy number)");
} else if (value === "") {
    console.log("The empty string is falsy (the only falsy string)");
} else {
    console.log("Unknown falsy value");
}







