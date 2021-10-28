/*5. Write a JavaScript function with conditional statement to sort 
three numbers.*/

function sort(a,b,c) {
    if (a>b && a>c) {
       p1=a;
       if (b>c) {
          p2=b;
          p3=с;
       } else {
          p2=с;
          p3=b;
       }
    } else if (b>c && b>a) {
       p1=b;
       if (a>c) {
          p2=a;
          p3=с;
       } else {
          p2=c;
          p3=a;
       }
    } else if (c>a && c>b) {
       p1=c;
       if (b>a) {
          p2=b;
          p3=a;
       } else {
          p2=a;
          p3=b;
       } 
    }
 }
 
 sort(5,7,6);
 
 console.log(p3);
 console.log(p2);
 console.log(p1)