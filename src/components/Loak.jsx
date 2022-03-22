import { useEffect} from 'react'
import Icons from './Icons'
const Loak = () =>{
    useEffect(()=>{
        const div = document.querySelector('div')
        const THRESHOLD = 15;
        div.addEventListener('mousemove',(e)=>{
            const { clientX, clientY, currentTarget } = e;
            const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;
            const horizontal = (clientX - offsetLeft) / clientWidth;
            const vertical = (clientY - offsetTop) / clientHeight;
            const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
            const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
            div.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
        })
        div.addEventListener('mouseleave',(e)=>{
            div.style.transform =
		`perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
        })
    },[])
    return(
        <div className="p-4 text-white rounded-md shadow-md cursor-default bg-primary">
            <div className="flex gap-4">
                <Icons name="loak"/>
                <h1 className='text-2xl'>loak.studio</h1>
            </div>
        </div>
    )
}

export default Loak