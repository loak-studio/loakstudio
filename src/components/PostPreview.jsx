export default ({ title, description, classes, slug }) => {
    return (
        <div className={"flex flex-col bg-[#F5F5F5] rounded-md relative overflow-hidden hover:opacity-75 transition group " + classes}>
            <figure className="w-full aspect-video">
                <img className="object-cover w-full h-full" src="http://placekitten.com/1000/800" alt="" />
            </figure>
            <span className='bg-amber-800 bg-opacity-25 m-2 absolute top-0 left-0 text-white text-sm px-2.5 py-1 rounded'>Développement</span>
            <div className="p-5 border-t-2 border-primary">
                <a href="#" className="before:absolute before:inset-0">
                    <h5 className="mb-2 text-xl line-clamp-2 group-hover:underline">
                        {title}
                    </h5>
                </a>
                <p className="mb-3 line-clamp-3">{description}</p>
            </div>
        </div>
    )
}