//Selectors
const header = document.querySelector('.header');
const menu = document.querySelector('.hamburger-menu');

// window.addEventListener('scroll', function() {
//     let windowPosition = window.scrollY > 0;
//     header.classList.toggle('active', windowPosition)

// })
menu.addEventListener('click', function() {
    header.classList.toggle('menu-open')
});


// Start Carousel Section

$(document).ready(function(){
    //Scroll to Top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });


    
    // scroll slides on mouse scroll 
    $('#myCarousel').bind('mousewheel DOMMouseScroll', function(e){
    
            if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
                $(this).carousel('prev');
                
                
            }
            else{
                $(this).carousel('next');
                
            }
        });
    
    //scroll slides on swipe for touch enabled devices  
         $("#myCarousel").on("touchstart", function(event){
     
            var yClick = event.originalEvent.touches[0].pageY;
            $(this).one("touchmove", function(event){
    
            var yMove = event.originalEvent.touches[0].pageY;
            if( Math.floor(yClick - yMove) > 1 ){
                $(".carousel").carousel('next');
            }
            else if( Math.floor(yClick - yMove) < -1 ){
                $(".carousel").carousel('prev');
            }
        });
        $(".carousel").on("touchend", function(){
                $(this).off("touchmove");
        });
    });
        
    });

// End Carousel Section
