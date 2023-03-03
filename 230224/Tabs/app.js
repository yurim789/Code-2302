const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.querySelector(`.content#${btn.id}`);
    element.classList.add("active");
  })
})