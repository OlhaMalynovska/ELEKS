/*There are two arrays with individual values, write a 
JavaScript program to compute the sum of each individual 
index value from the given arrays and save them to third 
array
*/

let  array1 = [2,4,5,6,6];
let  array2 = [4,5,3]; 
let  array3 = [];
array3.length = Math.max(array1.length, array2.length);
for (let i = 0; i < array3.length; i++) {
    if (i < array1.length) {
        array3[i]=array1[i];
    } else {
        array3[i] = 0;
    }
    if (i < array2.length) {
        array3[i]+=array2[i];
    }
    console.log(array3[i]);
}
  