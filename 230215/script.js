const boxes = document.querySelectorAll(".alertBox");
const button = document.querySelector(".showAll");

function showAll() {
  // boxes.forEach(function (index) {
  //   index.style.display = "block";
  // });
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.display = "block";
  }
}

function closeBox(str) {
  const box = document.querySelector(`.${str}`);
  box.style.display = "none";
}