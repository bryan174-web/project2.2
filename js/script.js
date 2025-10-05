/* Bryan Sevilla
date:9/28/2025
assignment: JavaScript for Project 2: Photo Gallery */

var i = 0;
var names = ['images/turtle2.jpg','images/turtle3.jpg','images/turtle4.jpg','images/turtle5.jpg'
  ,'images/turtle6.jpg','images/turtle7.jpg' , 'images/turtle8.jpg' , 'images/turtle9.jpg' ,'images/turtle10.jpg'
];
function run() {
  document.getElementById("myImg").src = names[i++];
  if (i === names.length) {
    i = 0;
    document.getElementById("myImg").src = names[0];
  }
}