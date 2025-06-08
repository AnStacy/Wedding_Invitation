document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".animate-on-scroll, .animate-photo, .animate-from-right, .animate-from-left"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  animatedElements.forEach((el) => observer.observe(el));
});
