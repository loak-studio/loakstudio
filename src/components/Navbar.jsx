import Icons from './Icons.jsx'
import Button from './Button.jsx'

export default () => {
    return (
        <nav class="flex justify-between pt-8 mb-8 px-4 md:px-8">
            <a class="flex items-center text-3xl text-primary" href="/">
                <Icons name="loak"/>
                <h1 className='ml-4'>loak.studio</h1>
            </a>
                <Button href='#' classes="hidden sm:flex">
                    <Icons outline={true} name="send"/> Nous contacter
                </Button>
        </nav>
    )
}