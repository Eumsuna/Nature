// 슬라이드
var slide = document.querySelectorAll('.slide-contents');
var index = 1;
//메뉴
var notice = document.querySelector('.notice');
var gallery = document.querySelector('.gallery');
var noticeButton = document.querySelector('.notice-button');
var galleryButton = document.querySelector('.gallery-button');
//팝업
var popupOn = document.querySelector('.popup-on');
var popup = document.querySelector('.popup');
var popupClose = document.querySelector('.popup-close');

//팝업
popupOn.addEventListener('click',function(){
    popup.className = 'popup on';
});
popupClose.addEventListener('click', function(){
    popup.className = 'popup';
})


// 슬라이드
setInterval(function(){
    if(index<slide.length){
        slide[index].style.opacity = '1'; index++
    } else{for(var i = 1; i<slide.length;i++){
        slide[i].style.opacity = '0';
    }index = 1;
    }
},3000);

//메뉴
noticeButton.addEventListener('click',function(){
    noticeButton.className = 'notice-button on';
    notice.className = 'notice on';
    galleryButton.className = 'gallery-button';
    gallery.className = 'gallery';
});
galleryButton.addEventListener('click', function(){
    galleryButton.className = 'gallery-button on';
    gallery.className = 'gallery on';
    noticeButton.className = 'notice-button';
    notice.className = 'notice';
});