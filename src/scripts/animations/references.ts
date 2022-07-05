import { animate, inView, spring, stagger } from "motion";
window.addEventListener("load", function () {
  inView("#references", ({ target }) => {
    const image = target.querySelectorAll("ul li figure img");
    target.querySelector("ul").classList.remove("opacity-0");
    animate(
      image,
      { opacity: [0, 1] },
      {
        delay: stagger(0.2),
        duration: 0.5,
        easing: spring(),
      },
    );
  }, { amount: .5 });
});
export {};
