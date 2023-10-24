var nav_height = $(".animation-container").height();
var nav_piece_height = 10;
var counter = 0;

$(document).ready(function(){
  for(i = 0; i < (nav_height/nav_piece_height); i++){
    if((i%2) == 0){//If even add right piece
      $(".animation-container").append("<div class='nav-right-piece'></div>");
    }else{//If odd add left piece
      $(".animation-container").append("<div class='nav-left-piece'></div>");
    }
  }
});

$(".nav-button").click(function(){
  //animate all the individual nav lines
  $(".animation-container .nav-right-piece, .nav-left-piece").each(function(i,el) {
    var $this = $(this);
    setTimeout(function() {
      $this.toggleClass('animate-nav-piece');
      //after animating nav lines animate the list
      if(i == Math.floor(nav_height/nav_piece_height)){
        animate_list();
      }
    }, i*25); // milliseconds
  });
  
  
});

function animate_list(){
  $(".text-container li").each(function(i,el) {
    var $this = $(this);
    setTimeout(function() {
      $this.toggleClass('animate-nav-li');
    }, i*75); // milliseconds
  });
}