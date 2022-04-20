const menu = () =>{
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
}

export default menu