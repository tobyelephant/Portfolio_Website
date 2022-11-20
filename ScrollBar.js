var height = $('.header').height();

$(window).scroll(function(){
    if($(this).scrollTop() > height){
        $('.nav').addClass('fixed',{duration:200,effect:'blind'});
    }else{
        $('.nav').removeClass('fixed');
    }
});