export default ({ href,light=false,children,classes }) => {
    let aClasses = "inline-flex items-center py-3 px-4 transition text-lg hover:underline " + classes + " "
    if (!light) {
        aClasses = aClasses + "text-white bg-primary hover:bg-primary-dark rounded-md"
    } else {
        aClasses = aClasses + "bg-white rounded-md hover:bg-slate-200 text-primary hover:text-primary-light"
    }

    return (
        <a  className={aClasses} href={href}>
               {children}
        </a>
    )
}

