import { animate, inView, spring, stagger } from "motion";
window.addEventListener("load", function () {
  inView("#reinsurance", ({ target }) => {
    animate(
      "#reinsurance > *",
      { y: [50, 0], opacity: [0, 1] },
      {
        delay: stagger(0.1),
        duration: 0.5,
        easing: spring(),
      },
    );
  });
});
export {};
