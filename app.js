/*4. Write a JavaScript function that accept two integers and 
display the larger.*/
function displayMax(a,b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
      console.log("Integer parameters expected");
      return;
    }
  
    if (a != b) {
      console.log("The larger number is " + Math.max(a,b));
    } else {
      console.log("Both numbers are equal to " + a);
    }
  }
  
  displayMax(6, 10);