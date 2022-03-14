import Icons from './Icons.jsx'

export default () => {
    return (
        <div class="flex flex-col gap-y-9 sm:flex-row justify-between items-center py-9 w-full max-w-7xl mx-auto text-[#00A99D] bg-white">
            <p>© loak.studio - Tous droits réservés.</p>
            <a class="-mr-2" href="#"><Icons name="loak" /></a>
            <ul class="flex flex-row items-center gap-x-4">
                <li>
                    <a href="#">
                        <Icons name='twitter'/>
                    </a>
                </li>
                <li>
                    <a href="#">
                            <Icons name='instagram'/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Icons name='facebook'/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Icons name='linkedin'/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Icons name='github'/>
                    </a>
                </li>
            </ul>
        </div>
    )
}