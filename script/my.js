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
    var ul = document.getElementById("ul")

    if($(window).width() < 584){
        $('.button').on('click', function() {
            $(".menuMobile").trigger('click');
        });
    }

    //Verifica se o usuário rola a tela do celular e conserta o display do menu.
    window.addEventListener("orientationchange", function(){
        if($(window).width() <= 584 && ul.style.display == 'none'){
            ul.style.display = "Flex";
        }else if($(window).width() >= 584 && ul.style.display == 'flex'){
            ul.style.display = 'none'
        }
    })
});