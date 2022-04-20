import unpoly from 'unpoly'
import { animate, spring,stagger } from "motion"



up.link.config.followSelectors.push('a[href]')
up.form.config.submitSelectors.push(['form'])
up.link.config.instantSelectors.push('a[href]')
up.link.config.preloadSelectors.push('a[href]')

let isAnimationPlayed = {
  homepage: false,
  contact:false
} 

up.compiler('#hero',()=>{
      animate(
        "#hero div",
        { y: [50,0], opacity:[0,1] },
        { easing: spring(), delay:(isAnimationPlayed.homepage? 0:1.2) }
      )


      // 
      


      if(!isAnimationPlayed.homepage){
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
        isAnimationPlayed.homepage = true;
      }
    
})

up.compiler('#page-portfolio',()=>{
  animate(
    "#rocket",
    {
      y:[0,50,0],
      x:[0,25,0],
      rotate:[-90,-80,-90]
    },
    { duration:10, repeat:Infinity, easing:"ease-in-out" }
  )
})

up.compiler('body',()=>{
  const button = document.querySelector('#toggle-menu')
    const body = document.querySelector('body')
    button.addEventListener('click', function () {
        const menu = document.querySelector('#menu')
        menu.classList.toggle('-translate-x-full')
        if(menu.classList.contains('-translate-x-full')) {
            button.textContent = "Menu"
            body.style.overflow = "auto"
        }
        else{
            button.textContent = "Fermer"
            body.style.overflow = "hidden"
            window.scrollTo(0,0)
        }
    })
})

up.compiler("#contactform",()=>{
  if(!isAnimationPlayed.contact){
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
    animate(
      "#bubble",
      {
        x:[0,25,0],
        rotate:[-10,0,-10]
      },
      { duration:5, repeat:Infinity, easing:"ease-in-out" }
    )
    isAnimationPlayed.contact = true
  }
})