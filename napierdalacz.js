var links = [
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
]

var i = 0;
var l = links.length;

function myLoop () {           //  create a loop function
   setTimeout(function () {    //  call a 3s setTimeout when the loop is called

     // var dup = document.getElementById('duplicatemsg');
     // if (dup != null) {
     //   document.getElementById('modalclose').click();
     // }

     console.log(i);

     document.getElementById('productaddbox').value = links[i];
     document.getElementById('productaddbutton').click();          //  your code here
      i++;                     //  increment the counter
      if (i < l) {            //  if the counter < 10, call the loop function
         myLoop();             //  ..  again which will trigger another
      }                        //  ..  setTimeout()
   }, 10000)
}

myLoop();

document.getElementById('productaddbox').value = links[i];
document.getElementById('productaddbutton').click();
