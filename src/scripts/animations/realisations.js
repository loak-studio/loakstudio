
import { animate } from "motion"

const realisations = ()=>{
    animate(
        "#rocket",
        {
          y:[0,50,0],
          x:[0,25,0],
          rotate:[-90,-80,-90]
        },
        { duration:10, repeat:Infinity, easing:"ease-in-out" }
      )
}

export default realisations