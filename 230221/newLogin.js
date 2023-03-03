const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

function onSubmit(e) {
  e.preventDefault();
  localStorage.setItem('username', loginInput.value);
  greeting.innerHTML = 'Hello, ' + loginInput.value;
  greeting.classList.remove('hidden');
  loginForm.classList.add('hidden');
}

loginForm.addEventListener('submit', onSubmit);

const savedUserName = localStorage.getItem('username');
if (savedUserName != null) {
  greeting.innerHTML = 'Hello, ' + savedUserName;
  greeting.classList.remove('hidden');
  loginForm.classList.add('hidden');
}