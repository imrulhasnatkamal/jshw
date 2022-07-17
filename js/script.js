
$(document).ready(function(){
$('.c_btn').hover(function(){
    alert('Showing you alert!');
},
function(){
    alert('Showing you alert after leaving mouse');
});

// focus blur 
$('input').focus(function(){
    $(this).val('focused').css("background-color","red")
});
$('input').blur(function(){
    $(this).val('blured').css("background-color","green")
});

// slide down 
$('.c_btn2').click(function(){
    $('.c_p2').slideDown();
});
// slide up 
$('.c_btn3').click(function(){
    $('.c_p3').slideUp();
});

// next function
$('li').click(function(){
    $(this).next().hide();
});

// parent 
$('.c_bnt').click(function(){
    $(this).parent().css("background-color","green").css("border","4px solid red").css("color","blue");
});

});