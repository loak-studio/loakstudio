import { animate, inView, spring, stagger } from "motion";
window.addEventListener("load", function () {
  inView("#contact", ({ target }) => {
    const image = target.querySelectorAll("img");
    target.querySelector("figure").classList.remove("opacity-0");
    animate(
      image,
      { x: [-50, 0], opacity: [0, 1] },
      {
        delay: 0.2,
        duration: 0.5,
        easing: spring(),
      },
    );
  }, { amount: 0.5 });
});
export {};
