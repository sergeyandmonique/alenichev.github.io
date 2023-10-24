$('.photo-gallery-popup').magnificPopup({    
     items: {
      src: '#magnific-gallery',
      type: 'inline'
    },

     closeMarkup:"<button title='%title%' type='button' class='mfp-close product-popup-close'></button>",
        midClick: true,
        focus: '#productPhotos',
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,      
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in',
        callbacks: {
            open: function() {
        
       $('.gallery-slider').slick('setPosition');
       $('.thumb-slider').slick('setPosition');
           }
   }
});

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.thumb-slider').slick('setPosition');
});            

$(document).ready(function() {
  $('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });
 });

 $(document).ready(function(){
        $('.gallery-slider').slick({
            centerMode: true,
            focusOnSelect: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            asNavFor: '.thumb-slider'
          });
  
        $('.thumb-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.gallery-slider',
            dots: false,
            arrows: true,
            centerMode: false,
            centerPadding: '20px',
            focusOnSelect: true,
            responsive: [
              {
                breakpoint: 450,
                settings: {
                  slidesToShow: 1
                }
              },
              {
                breakpoint: 700,
                settings: {
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 1500,
                settings: {
                  slidesToShow: 3
                }
              }                   
            ]
        });
      });