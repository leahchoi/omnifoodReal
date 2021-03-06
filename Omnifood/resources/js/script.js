$(document).ready(function() {
    
    
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        debugger;
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
    
    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
        debugger;
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-start').click(function () {
        debugger;
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    });
    
    /* Navigation scroll */
    $(function() {
        debugger;
      $('a[href*=#]:not([href=#])').click(function() {
          debugger;
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if ($('.js--nav-icon i').hasClass('ion-close-round')){
                debugger;
                $('.js--main-nav').slideToggle(200);
                $('.js--nav-icon i').addClass('ion-navicon-round');
                $('.js--nav-icon i').removeClass('ion-close-round');
            };
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        debugger;
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    
    /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        debugger;
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
    // $('ul.js--main-nav li a').click(function() {
    //     $('.js--nav-icon i').addClass('ion-navicon-round');
    //     $('.js--nav-icon i').removeClass('ion-close-round');
    //     document.getElementById('myModal').style.display = "none";
    //     window.location.href = window.location.href.split('#')[0]
    // })
});


// modal code

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var mobileNavSpan = $('ul.js--main-nav li a');

// When the user clicks the button, open the modal 
// btn.onclick = function () {
//     modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//     modal.style.display = "none";
//     window.location.href = window.location.href.split('#')[0]
// }

// $('ul.js--main-nav li a').click = function (){
//     modal.style.display = "none";
//     window.location.href = window.location.href.split('#')[0]
// }

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//         window.location.href = window.location.href.split('#')[0]
//     }
// }