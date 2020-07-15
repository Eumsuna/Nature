const logo = document.querySelector(".logo");
const menuContainer = document.querySelector(".menuContainer");
const button = document.querySelector(".button");
const about = document.querySelector("#about");
const photo = document.querySelector("#photo");
const up = document.querySelector(".top");
const sectionOneContent = document.querySelector(".sectionOneContent");
const article = document.querySelector(".article__wrap");
//logo 가 클릭되었을때,
//menuContainer 에 on 이라는 클래스를 추가.
//만약 menuCContainer 에 on 이라는 클래스가 있다면 on 을 제거.
//addeventListner, classList, toggle, click
//익명함수 callback

//어느정도 스크롤되면
//컨텐츠에 클래스 추가하기.

logo.addEventListener("click", (e) => {
  e.preventDefault();
  menuContainer.classList.toggle("on");
});

about.addEventListener("click", (e) => {
  e.preventDefault();
  window.scroll({
    behavior: "smooth",
    left: 0,
    top: 817,
  });
});

photo.addEventListener("click", (e) => {
  e.preventDefault();
  window.scroll({
    behavior: "smooth",
    left: 0,
    top: 1518,
  });
});

up.addEventListener("click", (e) => {
  e.preventDefault();
  window.scroll({
    behavior: "smooth",
    left: 0,
    top: 0,
  });
});

document.addEventListener("scroll", () => {
  const y = window.scrollY;
  if (y > 415) {
    sectionOneContent.classList.add("active");
  } else {
    sectionOneContent.classList.remove("active");
  }
});

document.addEventListener("scroll", () => {
  const y = window.scrollY;
  if (y > 1100) {
    article.classList.add("active");
  } else {
    article.classList.remove("active");
  }
});
