window.onload = function(){
    document.querySelector(".menuMobile").addEventListener("click", function(){
        if(document.querySelector(".menu nav ul").style.display == 'flex') {
            document.querySelector(".menu nav ul").style.display = 'none';
        } else {
            document.querySelector(".menu nav ul").style.display = 'flex';
        }
    })
}


jQuery(document).ready(function($){
    if($(window).width() < 768){
        $('.button').on('click', function() {
            $(".menuMobile").trigger('click');
        });
    }
});