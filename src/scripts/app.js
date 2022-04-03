import unpoly from 'unpoly'
up.link.config.followSelectors.push('a[href]')
up.form.config.submitSelectors.push(['form'])



up.compiler('body',()=>{
    const button = document.querySelector('#toggle-menu')

    button.addEventListener('click', function () {
        const menu = document.querySelector('#menu')
        menu.classList.toggle('-translate-x-full')
        if(menu.classList.contains('-translate-x-full')) {
            button.textContent = "Menu"
        }
        else{
            button.textContent = "Fermer"
        }
    })
})