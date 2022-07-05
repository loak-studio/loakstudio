import { animate, inView, spring, stagger } from "motion";
window.addEventListener("load", function () {
  inView("#services", ({ target }) => {
    const listItem = target.querySelectorAll("li");
    animate(
      listItem,
      { x: [-30, 0], opacity: [0, 1] },
      {
        delay: stagger(0.5),
        duration: 1,
        easing: spring(),
      },
    );
  });
});
export {};
