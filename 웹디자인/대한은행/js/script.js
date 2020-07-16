// 슬라이드
var slide = document.querySelectorAll(".slide-img");
var slideWrap = document.querySelector(".slide-img-wrap");
//탭전환
var notice = document.querySelector(".notice");
var gallery = document.querySelector(".gallery");
var noticeBtn = document.querySelector(".notice-button");
var galleryBtn = document.querySelector(".gallery-button");
// 팝업
var popupClose = document.querySelector(".popup-close");
var popup = document.querySelector(".popup");
var popupOn = document.querySelector(".popup-on");
// 메뉴
var subMenu = document.querySelectorAll(".sub-menu-wrap");
var mainMenu = document.querySelectorAll(".main-menu-wrap");
var menuWrap = document.querySelector(".menu-wrap");

// 메뉴
for (var i = 0; i < menuWrap.length; i++) {
  menuWrap[i].addEventListener("mouseenter", function () {
    for (var i = 0; i < subMenu.length; i++) {
      subMenu[i].style.height = "125px";
    }
    mainMenu.addEventListener("mouseleave", function () {
      for (var i = 0; i < subMenu.length; i++) {
        subMenu[i].style.height = "0";
      }
    });
  });
}

// 슬라이드
var slideCounter = 0;
for (var i = 0; i < slide.length; i++) {
  slide[i].style.left = i * 100 + "%";
}
setInterval(function () {
  if (slideCounter < slide.length - 1) {
    slideCounter++;
    slideWrap.style.left = slideCounter * -100 + "%";
  } else {
    slideCounter = 0;
    slideWrap.style.left = slideCounter * -100 + "%";
  }
}, 3000);

//탭전환
galleryBtn.addEventListener("click", function () {
  gallery.className = "gallery on";
  notice.className = "notice";
});
noticeBtn.addEventListener("click", function () {
  notice.className = "notice on";
  gallery.className = "gallery";
});

//팝업
popupOn.addEventListener("click", function () {
  popup.className = "popup on";
});
popupClose.addEventListener("click", function () {
  popup.className = "popup";
});
