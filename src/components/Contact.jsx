import Button from './Button.jsx'

export default () => {
    return (
        <div class="flex flex-col items-center justify-center mx-auto py-16 text-white max-w-7xl">
            <p class="pb-16 text-4xl">Un projet? Une idée à réaliser? Contactez-nous</p>
            <Button href='#' text='Nous contacter' icon='send'/>
        </div>
    )
}
