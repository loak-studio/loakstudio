import Icons from './Icons'

export default ({ href, text, icon, light }) => {
    if (!light) {
        return (
            <a href={href}>
                <div className="flex flex-row items-center p-2 text-white bg-[#00A99D] rounded-md">
                    <p className='inline-flex items-center text-lg'><Icons name={icon} />{text}</p>
                </div>
            </a>
        )
    } else {
        return (
            <a href={href}>
                <div className="flex flex-row items-center p-2 bg-white rounded-md">
                    <p className='inline-flex items-center text-[#00A99D] text-lg'><Icons name={icon} />{text}</p>
                </div>
            </a>
        )
    }

}

