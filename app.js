/*1. Write a JavaScript function to check if given string includes 
given symbol.*/
let str1 = "irgendwo auf der welt gibt's ein kleines bisschen glück";
let str2 = 'i';
let pos = str1.search(str2);
if (pos != -1) {
  console.log ('Yes, the position of the first occurrence of the symbol ' + "'" + str2 + "'" + ' in the given string: ' + str1.indexOf(str2));
  let count = str1.split(str2).length - 1;
  console.log('The given symbol ' + "'" + str2 + "'" + ' occurs ' + count + " times in the given string");  
} else {
  console.log ('No, the string does not include the given symbol ' + str2)
}
 