console.log("JS LOADED");
document.documentElement.classList.remove("no-js");

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('active');
  });

  card.addEventListener('mouseleave', () => {
    card.classList.remove('active');
  });
});

const status = document.querySelector('.status-card p');

if (status) {
  status.textContent = "IT'S FINALLY WORKINGGG";
}

function initAnimations() {

  // Check if browser supports it
  if (!("IntersectionObserver" in window)) {
    console.warn("IntersectionObserver not supported. Falling back.");

    // Fallback: just show everything
    document.querySelectorAll(".reveal").forEach(el => {
      el.classList.add("visible");
    });

    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // animate once
      }
    });
  }, {
    threshold: 0.15
  });

  document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
  });
}

// Run when page loads
window.addEventListener("load", initAnimations);

// Run when coming back via cache
window.addEventListener("pageshow", initAnimations);



