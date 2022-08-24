
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    dots: false,
    items: (document.documentElement.clientWidth > 1000) ? 2.3 : (document.documentElement.clientWidth > 700) ? 1.7 : 1.2,
    loop: true,
  });
});


const buttonBefore = document.querySelector(`.menu-btn__before`);
const buttonAfter = document.querySelector(`.menu-btn__after`);

buttonBefore.addEventListener("click", () => {
  const navMenu = document.querySelector(`.mobile-nav`);
  const header = document.querySelector(`.header`);
  const main = document.querySelector(`.main`);
  const footer = document.querySelector(`.footer`);

  navMenu.classList.remove(`none`);

  header.classList.add(`none`);
  main.classList.add(`none`);
  footer.classList.add(`none`);
})

buttonAfter.addEventListener("click", () => {
  const navMenu = document.querySelector(`.mobile-nav`);
  const header = document.querySelector(`.header`);
  const main = document.querySelector(`.main`);
  const footer = document.querySelector(`.footer`);

  navMenu.classList.add(`none`);

  header.classList.remove(`none`);
  main.classList.remove(`none`);
  footer.classList.remove(`none`);
});