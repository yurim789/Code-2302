// function closeBox() {
//   document.querySelector(".alertBox").style.display = "none";
// }

// function closeBox2() {
//   const div = document.querySelector(".alertBox");
//   const button = document.querySelector("button");

//   if (div.style.display === "none") {
//     div.style.display = "block";
//     button.innerHTML = "Click to hide alert box";
//   } else {
//     div.style.display = "none";
//     button.innerHTML = "Click to open alert box";
//   }
// }

// function b_btn() {
//   document.querySelector(".blue").style.display = "none";
// }
// function y_btn() {
//   document.querySelector(".yellow").style.display = "none";
// }
// function g_btn() {
//   document.querySelector(".gray").style.display = "none";
// }

function showAll() {
  document.querySelector(".blue").style.display = "block";
  document.querySelector(".yellow").style.display = "block";
  document.querySelector(".gray").style.display = "block";
}

function closeBox() {
  const box = document.querySelector(`.${str}`);
  box.style.display = "none";
}

// button.addEventListener('click', showAll);
