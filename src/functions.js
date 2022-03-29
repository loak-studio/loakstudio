
import {API_URL} from "./config"
export const getData = async (path) =>{
    const req = await fetch(`${API_URL}/api/${path}?populate=*`)
    return await req.json()
}