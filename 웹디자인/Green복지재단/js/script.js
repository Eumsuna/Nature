//팝업창
var popupOn = document.querySelector('.popup_on');
var popup = document.querySelector('.popup');
var popupClose = document.querySelector('.popup_close');

//슬라이드
var sliderWrap = document.querySelector('.slider_wrap');
var slide = document.querySelectorAll('.slide');

//메뉴
var mainMenu = document.querySelector('.main_menu');
var subMenu = document.querySelectorAll('.sub_menu');
var menuContents = document.querySelectorAll('.main_menu_contents');


//메뉴
for (i = 0; i < menuContents.length; i++) {
    menuContents[i].addEventListener('mouseenter', function(){
     for (var x = 0; x<subMenu.length; x++) {
        subMenu[x].className = 'sub_menu on';
     }
     mainMenu.addEventListener('mouseleave', function () {
         for (var x = 0; x < subMenu.length; x++) {
             subMenu[x].className = 'sub_menu';
         }
     });
    });
}

//팝업창
popupOn.addEventListener('click', function() {
    popup.className += ' on';
});
popupClose.addEventListener('click', function () {
    popup.className = 'popup';
});

//슬라이드
var slideCounter = 0;

for (var i = 0; i < slide.length; i++) {
    slide[i].style.left = 1 * 100 + '%';
}
setInterval(function () {
    if(slideCounter < slide.length -1){
        slideCounter++;
        sliderWrap.style.left = slideCounter * -100 + '%';
    } else{
        slideCounter = 0;
        sliderWrap.style.left = slideCounter * -100 + '%';
    }
}, 3000);