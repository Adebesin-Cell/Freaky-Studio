$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#to-top').fadeIn(); 
        } else { 
            $('#to-top').fadeOut(); 
        } 
    }); 
    $('#to-top').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 10); 
        return false; 
    }); 
});