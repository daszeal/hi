document.addEventListener("scroll", () => {

  if (window.scrollY > 700) {

    document
      .querySelectorAll(".reveal")
      .forEach(el => el.classList.add("visible"));

  }

});

