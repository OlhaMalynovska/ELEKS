/*2. Write a JavaScript function to check whether a string is blank 
or not (string with spaces should be also blank)*/
function isBLank(str) {
    let spaceless = str.replace(/ /g, '');
    return spaceless === "";
}

console.log(isBLank(""));
console.log(isBLank("      "));
console.log(isBLank(" a "));
