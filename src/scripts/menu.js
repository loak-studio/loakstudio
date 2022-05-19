const menu = () => {
    const button = document.querySelector('#toggle-menu')
    const body = document.querySelector('body')



    button.addEventListener('click', function () {
        const menu = document.querySelector('#menu')
        menu.classList.toggle('-translate-x-full')

        if (menu.classList.contains('-translate-x-full')) {
            // button.textContent = "Menu"
            body.style.overflow = "auto"
            setTimeout(() => {
                button.children[0].classList.toggle('rotate-45')
            }, 200)
            setTimeout(() => {
                button.children[2].classList.toggle('-rotate-45')
                button.children[2].classList.toggle('-mt-4')
            }, 400)
            setTimeout(() => {
                button.children[1].classList.toggle('translate-x-10')

            }, 600)
        } else {
            // button.textContent = "Fermer"
            body.style.overflow = "hidden"
            setTimeout(() => {
                button.children[1].classList.toggle('translate-x-10')
            }, 200)
            setTimeout(() => {
                button.children[2].classList.toggle('-rotate-45')
                button.children[2].classList.toggle('-mt-4')
            }, 400)
            setTimeout(() => {
                button.children[0].classList.toggle('rotate-45')

            }, 600)
            window.scrollTo(0, 0)
        }
    })
}

export default menu