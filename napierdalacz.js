var links = [
  "https://www.amazon.com/AmazonBasics-Premium-Anti-Fatigue-Standing-Comfort/dp/B00OUFX5AS?ref_=w_bl_hsx_s_ki_web_2528919011",
  "https://www.amazon.com/AmazonBasics-3-Sided-Grill-Brush-12-Inch/dp/B01K3MKWCK?ref_=w_bl_hsx_s_ki_web_2528919011",
  "https://www.amazon.com/AmazonBasics-Coffee-Storage-Carousel-K-Cup/dp/B010RLBZFU?ref_=w_bl_hsx_s_ki_web_2528919011",
]

var i = 0;
var l = links.length;

function myLoop () {           //  create a loop function
   setTimeout(function () {    //  call a 3s setTimeout when the loop is called

     // var dup = document.getElementById('duplicatemsg');
     // if (dup != null) {
     //   document.getElementById('modalclose').click();
     // }



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
