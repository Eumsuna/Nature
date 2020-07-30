var slide = document.querySelectorAll(".slide_img");
var slideWrap = document.querySelector(".slide_wrap");
var slideCounter = 0;

function slider() {
  if (slideCounter < slide.length - 1) {
    slideCounter++;
    slideWrap.style.top = slideCounter * -100 + "%";
  } else {
    slideCounter = 0;
    slideWrap.style.top = slideCounter * -100 + "%";
  }
}

setInterval(slider, 3000);

var popupOn = document.querySelector(".popup_on");
var popup = document.querySelector(".popup");
var popupClose = document.querySelector(".popup_close");

popupOn.addEventListener("click", function () {
  popup.className = "popup on";
});
popupClose.addEventListener("click", function () {
  popup.className = "popup";
});
