const menu = () => {
    const button = document.querySelector('#toggle-menu')
    const body = document.querySelector('body')

    button.addEventListener('click', function () {

        const menu = document.querySelector('#menu')
        menu.classList.toggle('-translate-x-full')
        body.classList.remove('overflow-y-hidden')


        if (menu.classList.contains('-translate-x-full')) {
            button.children[0].classList.toggle('rotate-45')
            setTimeout(() => {
                button.children[2].classList.toggle('-rotate-45')
            }, 50)
            setTimeout(() => {
                button.children[2].classList.toggle('-mt-4')
            }, 75)
            setTimeout(() => {
                button.children[1].classList.toggle('translate-x-[100px]')
            }, 100)
        } else {
            body.classList.add('overflow-y-hidden')
            button.children[1].classList.toggle('translate-x-[100px]')
            setTimeout(() => {
                button.children[2].classList.toggle('-rotate-45')
            }, 50)
            setTimeout(() => {

                button.children[2].classList.toggle('-mt-4')
            }, 75)
            setTimeout(() => {
                button.children[0].classList.toggle('rotate-45')
            }, 100)
            window.scrollTo(0, 0)
        }
    })
}

export default menu