/* 

random colours
https://stackoverflow.com/questions/58185036/choose-random-color-pallet-from-the-list-on-page-load

fade in colour with jquery ui
https://stackoverflow.com/questions/31353418/how-to-animate-background-color-in-jquery

save current colour
https://stackoverflow.com/questions/38928990/how-to-keep-background-color-changes-on-page-reload

fade in content 
https://stackoverflow.com/questions/7153369/fade-in-div-following-showdiv-settimeout

reverse scroll 2 coloumns
https://stackoverflow.com/questions/45900633/infinite-scrolling-after-applying-reverse-scrolling 

menu
https://stackoverflow.com/questions/36326184/how-do-i-change-my-button-text-onclick/36326445

https://www.w3schools.com/JQuery/tryit.asp?filename=tryjquery_eff_show_hide

scroll bg fade
https://stackoverflow.com/questions/38243620/fade-in-and-out-when-scrolling-with-jquery

https://stackoverflow.com/questions/11458066/fade-out-a-div-when-scroller-hits-bottom-of-another-div

logo
https://www.tutorialrepublic.com/faq/how-to-toggle-text-inside-an-element-on-click-using-jquery.php

preventing flash of unstyled content on ff (fouc)
https://stackoverflow.com/questions/35747465/css-before-js-and-white-flashes-in-firefox

https://stackoverflow.com/questions/196702/where-to-place-javascript-in-an-html-file

*/

//fade to combat fouc

function init(t) {
    if (!t) {
        t = 0;
        }
        setTimeout(show, t);
}

function show() {
    document.body.classList.add('visible');
    document.body.classList.remove('invisible');
}

//random palette

$(function() {
    var palettes = [
        ['#E9E6D3', '#000'], //beige
        ['#B9C2C9', '#000'], //blue
        ['#E8D9DA', '#000'], //pink
        ['#C2C9B9', '#000'], //green
        ['#B9BAC9', '#000'] //purple
    ];
    
    var randomPalette = palettes[Math.floor(Math.random() * palettes.length)];
  
    var new_bg = randomPalette[0];
    var new_text = randomPalette[1];
    
    //save current colour and remove it after refresh
    if (sessionStorage.getItem('body')) {
        document.body.style.backgroundColor = sessionStorage.getItem('body');
    }else{
        document.body.style.backgroundColor =  "#fff";
        sessionStorage.setItem('body', new_bg);
    };
    
    if (sessionStorage.setItem('body', new_bg)){
        sessionStorage.removeItem(new_bg);
        document.body.style.backgroundColor = sessionStorage.getItem('body');
    };
    
    $('body, .menu, .wrapi').animate({backgroundColor: new_bg}, 2000);

    //menu button

    $("#m").click(function(){
        if($("#m").text() == "About"){
            $(this).text("Close");
        } else {
            $(this).text("About");
        }
        $(".wrapd").fadeToggle("fast", "linear");
    }); 
    
    $('a, button').css('color', new_text);

});

//scroll bg fade

$(window).scroll(function() {
    if ($(this).scrollTop() > 30){
        $('.slogan').fadeOut();
    } else {
        $('.slogan').fadeIn();
    };
    
    if ($(this).scrollTop() + $(this).height() > $(document).height() - 30){
        $('.foot').fadeIn();
    } else {
        $('.foot').fadeOut();
    };
});  

//scroll

$(window).on('scroll',function(){
    $(".right").css('bottom',$(window).scrollTop()*-1
    );
});