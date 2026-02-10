let revealed = false;

document.addEventListener("scroll", () => {

  if (revealed) return;

  const cards = document.querySelector(".home-cards");

  if (!cards) return;

  if (cards.getBoundingClientRect().top < window.innerHeight * 0.8) {

    document
      .querySelectorAll(".reveal")
      .forEach(el => el.classList.add("visible"));

    revealed = true;
  }

});
