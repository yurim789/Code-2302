const noContext = document.getElementById("noContextMenu");

function preventDefault(e) {
  e.preventDefault();
}

noContext.addEventListener("copy", preventDefault);

// noContext.addEventListener("contextmenu", preventDefault);

// const input =
// document.querySelector('#name');

// function input() {
//   console.log(input.value);
// };