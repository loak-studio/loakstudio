
import Slugify from "slugify"
const config = {
    itemPerPages : 6,
    createSlug : (name)=>{
        return Slugify(name,{lower:true,trim:true,replacement:'-',remove:'\''})
    }
}

export default config