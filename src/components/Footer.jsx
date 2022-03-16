import Icons from './Icons.jsx'

export default () => {
    const username = "loakstudio"
    const links = [
        {
            icon: 'twitter',
            url: 'https://twitter.com/' + username,
            name: 'Twitter'
        },
        {
            icon: 'github',
            url: 'https://github.com/' + username,
            name: 'Github'
        },
        {
            icon: 'linkedin',
            url: 'https://linkedin.com/company/' + username,
            name: 'LinkedIn'
        },
        {
            icon: 'facebook',
            url: 'https://facebook.com/' + username,
            name: 'Facebook'
        },
        {
            icon: 'instagram',
            url: 'https://instagram.com/' + username,
            name: 'Instagram'
        },
    ]
    return (
        <footer class="flex flex-col gap-y-9 sm:flex-row justify-between items-center py-9 w-full max-w-7xl mx-auto text-primary bg-white">
            <p>&copy; loak.studio - Tous droits réservés.</p>
            <Icons name="loak" />
            <ul class="flex flex-row items-center gap-x-4">
                {links.map(link => {
                    return (
                        <li className='relative p-1 transition rounded-sm hover:bg-black hover:bg-opacity-10'>
                            <a target="_blank" rel="noopener noreferrer" href={link.url} className="transition before:absolute before:inset-0 hover:text-primary-darkest">
                                <Icons name={link.icon} />
                                <span className='sr-only'>{link.name}</span>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </footer>
    )
}