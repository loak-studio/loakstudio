
import {API_URL} from "./config"
export const getData = async (path,params) =>{
    const req = await fetch(`${API_URL}/api/${path}?populate=*${params?params:''}`)
    return await req.json()
}