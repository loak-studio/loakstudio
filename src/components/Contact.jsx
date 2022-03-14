import Button from './Button.jsx'
import Icons from './Icons.jsx'

export default () => {
    return (
        <div class="flex flex-col items-center justify-center mx-auto py-8 md:py-16 text-white max-w-7xl px-4 md:px-0 text-center">
            <p class="pb-8 md:pb-16 text-2xl md:text-4xl">Un projet? Une idée à réaliser? Contactez-nous</p>
            <Button href='#'>
                <Icons outline={true} name="send"/> Nous contacter
            </Button>
        </div>
    )
}
