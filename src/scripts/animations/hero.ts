import { animate, spring } from "motion";
animate(
  "#hero #lock",
  {
    opacity: [0, 1],
    x: [-50, 0],
    y: [50, 0],
    rotate: 40,
  },
  { easing: spring(), delay: 0 },
);
animate(
  "#hero #computer",
  {
    opacity: [0, 1],
    x: [-50, 0],
    y: [-50, 0],
    rotate: -14,
  },
  { easing: spring(), delay: 0.2 },
);
animate(
  "#hero #mail",
  {
    opacity: [0, 1],
    x: [50, 0],
    y: [-50, 0],
    rotate: 27,
  },
  { easing: spring(), delay: 0.4 },
);
animate(
  "#hero #figma",
  {
    opacity: [0, 1],
    x: [50, 0],
    y: [0, 0],
    rotate: 35,
  },
  { easing: spring(), delay: 0.6 },
);
animate(
  "#hero #bag",
  {
    opacity: [0, 1],
    x: [50, 0],
    y: [50, 0],
    rotate: -55,
  },
  { easing: spring(), delay: 0.8 },
);
export {};
