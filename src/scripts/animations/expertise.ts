import { animate, inView, spring, stagger } from "motion";
window.addEventListener("load", function () {
  inView("#expertise", ({ target }) => {
    const elements = target.querySelectorAll("div");
    animate(
      elements[0],
      { x: [-50, 0], opacity: [0, 1] },
      {
        delay: 0.2,
        duration: 0.5,
        easing: spring(),
      },
    );
    animate(
      elements[1],
      { x: [50, 0], opacity: [0, 1] },
      {
        delay: 0.2,
        duration: 0.5,
        easing: spring(),
      },
    );
  });
});
export {};
