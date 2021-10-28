/*3.Write a JavaScript function to convert a string in abbreviated 
form. console.log(abbrev (“Name Surname")) – should be 
“N.S.” (should convert lower case names to upper)*/
function abbrev(a) {
    let res=a.split(" ");
    let n=res[0][0].toUpperCase();
    let s=res[1][0].toUpperCase();
    return `${n}. ${s}.`; 
}

console.log(abbrev('Olha Malynovska'));
