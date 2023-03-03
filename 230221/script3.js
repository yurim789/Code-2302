const h2 = document.querySelector('h2');
const div = document.querySelector('#bg');

const superEventHandler = {
  handleEventMouseEnter: function () {
    h2.innerHTML = "The Mouse is here!";
    h2.style.color = 'blue';
  },
  handleEventMouseLeave: function () {
    h2.innerHTML = "The Mouse is gone!";
    h2.style.color = 'green';
  },
  handleEventWindowResize: function () {
    h2.innerHTML = "You just resized!";
    h2.style.color = 'violet';
  },
  handleEventMouseRightClick: function () {
    h2.innerHTML = "That was a right click!";
    h2.style.color = 'red';
  }
}
h2.addEventListener('mouseenter', superEventHandler.handleEventMouseEnter);
h2.addEventListener('mouseleave', superEventHandler.handleEventMouseLeave);
window.addEventListener('resize', superEventHandler.handleEventWindowResize);
window.addEventListener('contextmenu', superEventHandler.handleEventMouseRightClick);