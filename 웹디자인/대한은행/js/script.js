// 슬라이드
var slide = document.querySelectorAll(".slide-img");
var slideWrap = document.querySelector(".slide-img-wrap");

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
