import Icons from './Icons.jsx'
import Button from './Button.jsx'

export default () => {
    return (
        <nav class="flex flex-row justify-between mx-auto my-8 max-w-7xl">
            <a class="flex flex-row items-center text-3xl text-primary" href="#">
                <Icons name="loak"/>
                loak.studio
            </a>
            <div class="hidden sm:flex">
                <Button href='#' text='Nous contacter' icon='send'/>
            </div>
        </nav>
    )
}