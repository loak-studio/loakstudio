const menu = () => {
    const button = document.querySelector('#toggle-menu')
    const body = document.querySelector('body')



    button.addEventListener('click', function () {
        const menu = document.querySelector('#menu')
        const body = document.querySelector('body')
        menu.classList.toggle('-translate-x-full')
        body.classList.remove('overflow-y-hidden')

        if (menu.classList.contains('-translate-x-full')) {
            // button.textContent = "Menu"
            setTimeout(() => {
                button.children[0].classList.toggle('rotate-45')
            }, 200)
            setTimeout(() => {
                button.children[2].classList.toggle('-rotate-45')
            }, 400)
            setTimeout(() => {
                button.children[2].classList.toggle('-mt-4')
            }, 500)
            setTimeout(() => {
                button.children[1].classList.toggle('translate-x-[100px]')

            }, 600)
        } else {
            // button.textContent = "Fermer"
            
            body.classList.add('overflow-y-hidden')
            setTimeout(() => {
                button.children[1].classList.toggle('translate-x-[100px]')
            }, 200)
            setTimeout(() => {
                button.children[2].classList.toggle('-rotate-45')
            }, 400)
            setTimeout(() => {

                button.children[2].classList.toggle('-mt-4')
            }, 500)
            setTimeout(() => {
                button.children[0].classList.toggle('rotate-45')

            }, 600)
            window.scrollTo(0, 0)
        }
    })
}

export default menu