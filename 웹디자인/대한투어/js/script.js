// 슬라이드
var slide = document.querySelectorAll('.slide_img');
var slideWrap = document.querySelector('.slide_wrap');
var slideCounter = 0;
//팝업
var popupOn = document.querySelector('.popup_on');
var popup = document.querySelector('.popup');
var popupClose = document.querySelector('.popup_close');

//슬라이드
setInterval(function(){
    if(slideCounter<slide.length-1){
        slideCounter++;
        slideWrap.style.top = slideCounter*-100+'%'
    }else{
        slideCounter = 0;
        slideWrap.style.top = slideCounter*-100+'%'
    }
},3000)
//팝업
popupOn.addEventListener('click',function(){
    popup.className = 'popup on'
})
popupClose.addEventListener('click',function(){
    popup.className = 'popup'
})