document.addEventListener("DOMContentLoaded", () => {

  let triggered = false;

  window.addEventListener("scroll", () => {

    if (triggered) return;

    const section = document.querySelector(".home-cards");

    if (!section) return;

    const top = section.getBoundingClientRect().top;
    const trigger = window.innerHeight * 0.9;

    if (top < trigger) {

      document
        .querySelectorAll(".reveal")
        .forEach(card => {
          card.classList.add("visible");
        });

      triggered = true;
    }

  });

});
