
  const menuOpen = document.getElementById('menu-open-button');
  const menuClose = document.getElementById('menu-close-button');

  menuOpen.addEventListener('click', () => {
    document.body.classList.add('show-mobile-menu');
  });

  menuClose.addEventListener('click', () => {
    document.body.classList.remove('show-mobile-menu');
  });

  // Optional: close menu when a nav link is clicked
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      document.body.classList.remove('show-mobile-menu');
    });
  });



// === Testimonial slider logic ===
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".testimonial-slider");

  if (!slider) return;

  const scrollAmount = 320; // scroll per click

  // Create buttons
  const leftBtn = document.createElement("button");
  const rightBtn = document.createElement("button");

  leftBtn.innerHTML = "<";
  rightBtn.innerHTML = ">";

  leftBtn.className = "testimonial-scroll-btn left";
  rightBtn.className = "testimonial-scroll-btn right";

  Object.assign(leftBtn.style, {
    position: "absolute",
    left: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "1.5rem",
    backgroundColor: "var(--secondary-color)",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    cursor: "pointer",
    zIndex: 10
  });

  Object.assign(rightBtn.style, {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "1.5rem",
    backgroundColor: "var(--secondary-color)",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    cursor: "pointer",
    zIndex: 10
  });

  const testimonialSection = document.querySelector(".testimonial-section");
  testimonialSection.style.position = "relative";
  testimonialSection.appendChild(leftBtn);
  testimonialSection.appendChild(rightBtn);

  // Scroll logic
  leftBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  rightBtn.addEventListener("click", () => {
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".testimonial-slider");
  const leftBtn = document.getElementById("testimonial-left");
  const rightBtn = document.getElementById("testimonial-right");

  const scrollAmount = 320;

  if (!slider || !leftBtn || !rightBtn) return;

  leftBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  rightBtn.addEventListener("click", () => {
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
});
