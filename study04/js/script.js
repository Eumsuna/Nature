//button이 클릭되었을때
//hi에 on 클래스 추가

const button = document.querySelector("button");
const hi = document.querySelector(".hi");

button.addEventListener("click", () => {
  hi.classList.toggle("on");
});
