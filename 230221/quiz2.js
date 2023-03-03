const button1 = document.getElementById("myButton1");
const button2 = document.getElementById("myButton2");
const button3 = document.getElementById("myButton3");
const output = document.getElementById("output");

// button1.addEventListener("click", function () {
//   output.innerHTML = "Button 1 was clicked!";
// });
// button2.addEventListener("click", function () {
//   output.innerHTML = "Button 2 was clicked!";
// });
// button3.addEventListener("click", function () {
//   output.innerHTML = "Button 3 was clicked!";
// });

const buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach((button, index) => {
  button.addEventListener('click', function () {
    output.innerHTML = 'Button ' + (index + 1) + ' was clicked.';
  })
})