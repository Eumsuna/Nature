// 팝업
var popupOn = document.querySelector('.popup_on');
var popup =document.querySelector('.popup');
var popupClose = document.querySelector('.popup_close');
//메뉴
var subWrap = document.querySelectorAll('.sub_menu_wrap');
var mainMenu = document.querySelector('.up_nav');
var subBg = document.querySelector('.sub_menu_background');
//슬라이드
var  slide = document.querySelectorAll('.slide_contents');
var index = 1;

//슬라이드
setInterval(function(){
    if(index<slide.length){
        slide[index].style.opacity = '1';index++
    }else{for(var i = 1; i<slide.length;i++){
        slide[i].style.opacity = '0';
    }index = 1
    } 
},3000)

//팝업
popupOn.addEventListener('click',function(){
    popup.className = 'popup on';
})
popupClose.addEventListener('click',function(){
    popup.className = 'popup'
})
//메뉴
mainMenu.addEventListener('mouseenter', function(){
    for(i=0;i<subWrap.length;i++){
        subWrap[i].style.height = '90px'
    } 
    subBg.style.height = '90px'
})
mainMenu.addEventListener('mouseleave',function(){
    for(i=0;i<subWrap.length;i++){
        subWrap[i].style.height ='0'
    }
    subBg.style.height = '0'
})