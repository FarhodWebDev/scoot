const openerBtn = document.querySelector(".opener");
const closerBtn = document.querySelector(".closer");

const body = document.querySelector("body");
const nav = document.querySelector(".site-nav");
const navbg = document.querySelector(".black-bg");

openerBtn.addEventListener("click", () => {
  closerBtn.classList.add("show");
  body.classList.add("scroll-none");
  nav.classList.add("show-nav");
  openerBtn.classList.add("hide");
  navbg.classList.add("show-nav");
});
closerBtn.addEventListener("click", () => {
  closerBtn.classList.remove("show");
  body.classList.remove("scroll-none");
  nav.classList.remove("show-nav");
  openerBtn.classList.remove("hide");
  navbg.classList.remove("show-nav");
});

navbg.addEventListener("click", () => {
  closerBtn.classList.remove("show");
  body.classList.remove("scroll-none");
  nav.classList.remove("show-nav");
  openerBtn.classList.remove("hide");
  navbg.classList.remove("show-nav");
});
