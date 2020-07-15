//메뉴
var MenuContent = document.querySelectorAll(".menu_content");
var subMenuW = document.querySelectorAll(".sub_menu_wapper");
var MenuW = document.querySelector(".main_menu_wapper");
//슬라이드
var sliderW = document.querySelector(".slider_warp");
var slider = document.querySelectorAll(".slider");
//탭전환
var noticeButton = document.querySelector(".notice_button");
var galleryButton = document.querySelector(".gallery_button");
var notice = document.querySelector(".notice");
var gallery = document.querySelector(".gallery");

//팝업
var popupOn = document.querySelector(".popup_on");
var popup = document.querySelector(".popup");
var popupClose = document.querySelector(".popup_close");

//메뉴
for (var i = 0; i < MenuContent.length; i++) {
  MenuContent[i].addEventListener("mouseenter", function () {
    for (var x = 0; x < subMenuW.length; x++) {
      subMenuW[x].className = "sub_menu_wapper on";
    }
    MenuW.addEventListener("mouseleave", function () {
      for (var x = 0; x < subMenuW.length; x++) {
        subMenuW[x].className = "sub_menu_wapper";
      }
    });
  });
}

//슬라이드
var slideCounter = 0;

for (var i = 0; i < slider.length; i++) {
  slider[i].style.left = i * 100 + "%";
}
setInterval(function () {
  if (slideCounter < slider.length - 1) {
    slideCounter++;
    sliderW.style.left = slideCounter * -100 + "%";
  } else {
    slideCounter = 0;
    sliderW.style.left = slideCounter * -100 + "%";
  }
}, 5000);

//탭전환
noticeButton.addEventListener("click", function () {
  noticeButton.className = "notice_button on";
  galleryButton.className = "gallery_button";
  notice.className = "notice on";
  gallery.className = "gallery";
});
galleryButton.addEventListener("click", function () {
  noticeButton.className = "notice_button";
  galleryButton.className = "gallery_button on";
  notice.className = "notice";
  gallery.className = "gallery on";
});

//팝업
popupOn.addEventListener("click", function () {
  popup.className = "popup on";
});
popupClose.addEventListener("click", function () {
  popup.className = "popup";
});
