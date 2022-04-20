
import { animate,stagger } from "motion"

let isAnimationPlayed = false

const doContact = () =>{
    if(!isAnimationPlayed){
        animate(
          ".message",
          { 
            y: [-10,0],
          opacity:[0,1]
         },
          {
            delay: stagger(0.5),
            duration: 0.5,
            easing: [.22, .03, .26, 1]
          }
        )
        isAnimationPlayed = true
      }

      animate(
        "#bubble",
        {
          x:[0,25,0],
          rotate:[-10,0,-10]
        },
        { duration:5, repeat:Infinity, easing:"ease-in-out" }
      )
}

export default doContact