export default ({ title, description }) => {
    return (
        <div className="flex max-w-sm flex-col bg-[#F5F5F5] rounded-md relative">
            <a href="#" className=''>
                <img className="w-full rounded-t-md max-h-60" src="http://placekitten.com/800/300" alt="" />
                <span className='bg-[#DD7D5F]/[0.33] m-2 absolute top-0 left-0 text-white text-sm px-2.5 py-1 rounded'>Développement</span>
            </a>
            <div className="p-5 border-t-[3px] border-[#00A99D]">
                <a href="#">
                    <h5 className="mb-2 text-2xl line-clamp-2">{title}</h5>
                </a>
                <p className="mb-3 text-lg line-clamp-3">{description}</p>
            </div>
        </div>
    )
}