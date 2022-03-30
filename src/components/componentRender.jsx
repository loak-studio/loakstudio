const ComponentRender = ({component})=>{
    switch(component.__component){
        case "page.hero":
            return <p>Hero</p>
        default:
            return <p>unknow</p>
    }
}

export default ComponentRender