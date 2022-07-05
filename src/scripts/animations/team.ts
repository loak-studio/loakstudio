import { animate, inView, spring, stagger } from "motion";
window.addEventListener("load", function () {
  inView("#team", ({ target }) => {
    const members = target.querySelectorAll("li");
    animate(
      members,
      { y: [50, 0], opacity: [0, 1] },
      {
        delay: stagger(0.3),
        duration: 1,
      },
    );
  });
});
export {};
