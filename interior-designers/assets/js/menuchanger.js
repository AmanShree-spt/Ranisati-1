$(document).ready(function(){
        
    $('.ScrollLogo').css("display","none");
    $('.scrooling .ScrollLogo').css("display","block");
    
     //color changer

     $(window).scroll(function(){
     if($(this).scrollTop() >50){   
     $('.custom_nav').addClass('scrooling'); 
     $('.custom_nav .SimpleLogo').css("display","none"); 
     $('.custom_nav .ScrollLogo').css("display","block"); 
     } else {
     $('.custom_nav').removeClass('scrooling');
     $('.custom_nav .SimpleLogo').css("display","block"); 
     $('.custom_nav .ScrollLogo').css("display","none"); 
     }
     });
     
 });        
     