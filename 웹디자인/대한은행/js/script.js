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
