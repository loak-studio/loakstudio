const ComponentRender = ({component})=>{
    switch(component.__component){
        case "page.hero":
            return <p>Hero</p>
        case "page.discover":
            return <p>discover</p>
            case "page.ctacontact":
                return <p>ctacontact</p>
        default:
            return <p>{component.__component}</p>
    }
}

export default ComponentRender