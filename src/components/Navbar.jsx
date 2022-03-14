import Icons from './Icons.jsx'
import Button from './Button.jsx'

export default () => {
    return (
        <nav class="flex justify-between pt-8 mb-8 px-4 md:px-8">
            <a class="flex items-center text-3xl text-primary" href="/">
                <Icons name="loak"/>
                loak.studio
            </a>
            <div class="hidden sm:flex">
                <Button href='#' text='Nous contacter' icon='send'/>
            </div>
        </nav>
    )
}