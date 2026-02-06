console.log("676767 HAHAHAHHAHAHA");
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('active');
  });

  card.addEventListener('mouseleave', () => {
    card.classList.remove('active');
  });
});

const status = document.querySelector('.status-card p');
status.textContent = "IT'S FINALLY WORKINGGG";

function initAnimations() {

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  document.querySelectorAll(".fade-in, .reveal").forEach(el => {
    observer.observe(el);
  });

}


// Run when page loads
document.addEventListener("DOMContentLoaded", () => {
  initAnimations();
  setTimeout(initAnimations, 100);
});


// Run when page is restored from cache
window.addEventListener("pageshow", initAnimations);
