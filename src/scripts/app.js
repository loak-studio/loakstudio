import unpoly from 'unpoly'
import { animate, spring,stagger } from "motion"



up.link.config.followSelectors.push('a[href]')
up.form.config.submitSelectors.push(['form'])
up.link.config.instantSelectors.push('a[href]')
up.link.config.preloadSelectors.push('a[href]')



up.compiler('body[up-source="/"]',()=>{
      animate(
        "#hero div",
        { y: [50,0], opacity:[0,1] },
        { easing: spring(), delay:1.2 }
      )


      // 
      
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

up.compiler('body[up-source="/realisations"]',()=>{
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