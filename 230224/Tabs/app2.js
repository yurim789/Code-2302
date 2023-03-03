const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.currentTarget.id;
    const element = document.querySelector(`.content#${id}`);

    const activeBtn = document.querySelector(".tab-btn.active");
    const activeArticle = document.querySelector(".content.active");
    activeBtn.classList.remove("active");
    activeArticle.classList.remove("active");

    btn.classList.add("active");
    element.classList.add("active");
  });
});
