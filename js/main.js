$(document).ready(function () {
     $(window).scroll(function(){
         vitri =  $(window).scrollTop();
        if(vitri < 100 )
        {
            $('#back-top').fadeOut();
        }
        else
        {
            $('#back-top').fadeIn();
        }
     });
        $('#back-top').click(function () {
             $('body, html').animate({ scrollTop: 0 }, 800);
     });
})