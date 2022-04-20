
import { animate, spring } from "motion"

let isAnimationPlayed = false

const homepage = () =>{
    animate(
        "#hero div",
        { y: [50,0], opacity:[0,1] },
        { easing: spring(), delay:(isAnimationPlayed? 0:1.2) }
      )


      // 
      


      if(!isAnimationPlayed){
        animate(
          "#hero #lock",
          {
            opacity: [0,1],
            x:[-50,0],
            y:[50,0]
          },
          { easing: spring(), delay:0 }
        )
        animate(
          "#hero #computer",
          {
            opacity: [0,1],
            x:[-50,0],
            y:[-50,0]
          },
          { easing: spring(), delay:0.2 }
        )
        animate(
          "#hero #mail",
          {
            opacity: [0,1],
            x:[50,0],
            y:[-50,0]
          },
          { easing: spring(), delay:0.4 }
        )
        animate(
          "#hero #figma",
          {
            opacity: [0,1],
            x:[50,0],
            y:[0,0]
          },
          { easing: spring(), delay:0.6 }
        )
  
        animate(
          "#hero #bag",
          {
            opacity: [0,1],
            x:[50,0],
            y:[50,0]
          },
          { easing: spring(), delay:0.8 }
        )
        isAnimationPlayed = true;
      }
}

export default homepage