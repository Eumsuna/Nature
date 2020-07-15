//팝업
var popup = document.querySelector(".popup");
var popupOn = document.querySelector(".popup-on");
var popupClose = document.querySelector(".popup-close");

var notice = document.querySelector(".notice");
var gallery = document.querySelector(".gallery");
var noticeBtn = document.querySelector(".notice-button");
var galleryBtn = document.querySelector(".gallery-button");

// 슬라이드
var slide = document.querySelectorAll(".slide-img");
var index = 1;

// 슬라이드
setInterval(function () {
  if (index < slide.length) {
    slide[index].style.opacity = "1";
    index++;
  } else {
    for (var i = 1; i < slide.length; i++) {
      slide[i].style.opacity = "0";
    }
    index = 1;
  }
}, 3000);

//팝업
popupOn.addEventListener("click", function () {
  popup.className = "popup on";
});
popupClose.addEventListener("click", function () {
  popup.className = "popup";
});

galleryBtn.addEventListener("click", function () {
  gallery.className = "gallery on";
  notice.className = "notice";
});
noticeBtn.addEventListener("click", function () {
  notice.className = "notice on";
  gallery.className = "gallery";
});
