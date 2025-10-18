/* Bryan Sevilla
date:9/28/2025
assignment: JavaScript for Project 2: Photo Gallery */


/*This glitches, then It starts to work the way I want it after all the images have ben showned */
function swapImages(){
  var $active = $('#myGallery .active');
   var $next = ($('#myGallery .active').next().length > 0) ? $('#myGallery .active').next() : $('#myGallery img:first');
  $active.fadeOut(function(){
    $active.removeClass('active');
    $next.fadeIn().addClass('active');
  });
}

// Run our swapImages() function every 3secs
setInterval('swapImages()', 3000);

/* This button works*/
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
