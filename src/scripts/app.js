import unpoly from 'unpoly'
import { animate, spring,stagger } from "motion"



up.link.config.followSelectors.push('a[href]')
up.form.config.submitSelectors.push(['form'])
up.link.config.instantSelectors.push('a[href]')
up.link.config.preloadSelectors.push('a[href]')



up.compiler('body',()=>{
    animate(
        "#hero img",
        { opacity: [0,1] },
        { easing: spring(),delay: stagger(0.3), }
      )
      animate(
        "#hero h1",
        { y: [50,0], opacity:[0,1] },
        { easing: spring(), }
      )

      animate(
        "#hero p",
        { opacity:[0,1] },
        { easing: spring(),delay: 0.6, }
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

