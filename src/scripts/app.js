import unpoly from 'unpoly'
import Blobity from 'blobity';


up.link.config.followSelectors.push('a[href]')
up.form.config.submitSelectors.push(['form'])
up.compiler('body',()=>{
    const options = { 
        color: 'rgb(180, 180, 180)' ,
        opacity:0.5,
        zIndex:5,
    };
    new Blobity(options);
})