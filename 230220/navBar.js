const navbar = document.getElementById("navbar");
const content = document.querySelector(".content");
const sticky = navbar.offsetTop;
console.log(sticky);
console.log(window.scrollY);

function myFunction() {
  console.log(window.scrollY);

}

document.addEventListener("scroll", myFunction);