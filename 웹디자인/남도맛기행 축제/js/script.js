var slide = document.querySelectorAll(".slide_img");
var slideWrap = document.querySelector(".slide_wrap");

var slideCounter = 0;

var popupOn = document.querySelector(".popup_on");
var popup = document.querySelector(".popup");
var popupClose = document.querySelector(".popup_close");

popupOn.addEventListener("click", function () {
  popup.className = "popup on";
});
popupClose.addEventListener("click", function () {
  popup.className = "popup";
});

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
