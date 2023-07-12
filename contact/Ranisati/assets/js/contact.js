$(document).ready(function(){    
    $(".down").click(function() {
    $('html,body').animate({
    scrollTop: $("#cont-form").offset().top},
    'slow');
    });
    
    // Hover

    $('.img-link i').hover(function(){
       $('.start--project').css({'color':'#3c818f'});
       $(this).css({'color':'#3c818f'});
     }
        , function(){
       $('.start--project').css({'color': '#616161'});
     $(this).css({'color':'#616161'});
    });
    
    $('.start--project').hover(function(){
       $('.img-link i').css({'color':'#3c818f'});
        $(this).css({'color':'#3c818f'});
    }
        , function(){
       $('.img-link i').css({'color': '#616161'});
        $(this).css({'color':'#616161'});
    });
    
});