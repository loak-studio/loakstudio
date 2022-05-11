
import { animate, spring } from "motion"

let isAnimationPlayed = false

const homepage = () =>{
    document.querySelector('#hero').classList.remove('opacity-0')
    animate(
        "#hero div",
        { y: [50,0], opacity:[0,1] },
        { easing: spring(), delay:(isAnimationPlayed? 0:1.2) }
      )

      if(!isAnimationPlayed){
        animate(
          "#hero #lock",
          {
            opacity: [0,1],
            x:[-50,0],
            y:[50,0],
            rotate:40
          },
          { easing: spring(), delay:0 }
        )
        animate(
          "#hero #computer",
          {
            opacity: [0,1],
            x:[-50,0],
            y:[-50,0],
            rotate:-14
          },
          { easing: spring(), delay:0.2 }
        )
        animate(
          "#hero #mail",
          {
            opacity: [0,1],
            x:[50,0],
            y:[-50,0],
            rotate:27
          },
          { easing: spring(), delay:0.4 }
        )
        animate(
          "#hero #figma",
          {
            opacity: [0,1],
            x:[50,0],
            y:[0,0],
            rotate:35
          },
          { easing: spring(), delay:0.6 }
        )
  
        animate(
          "#hero #bag",
          {
            opacity: [0,1],
            x:[50,0],
            y:[50,0],
            rotate:-55
          },
          { easing: spring(), delay:0.8 }
        )
        isAnimationPlayed = true;
      }

      animate(
        "#bulb",
        {
          x:[0,25,0],
          rotate:[-10,0,-10]
        },
        { duration:5, repeat:Infinity, easing:"ease-in-out" }
      )
      animate(
        "#pen",
        {
          x:[0,25,0],
          rotate:[180,5,0,5,180]
        },
        { duration:10, repeat:Infinity, easing:"ease-in-out" }
      )
}

export default homepage