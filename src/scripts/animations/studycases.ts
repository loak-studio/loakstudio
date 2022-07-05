import { animate, inView, spring, stagger } from "motion";
window.addEventListener("load", function () {
  inView("#study-cases", ({ target }) => {
    target.classList.remove("opacity-0");
    const studyCase = target.querySelectorAll(".study-case");
    animate(
      studyCase,
      { opacity: [0, 1] },
      {
        delay: stagger(0.2),
        duration: 1,
      },
    );
  }, { amount: 0.5 });
});
export {};
