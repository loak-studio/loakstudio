import unpoly from 'unpoly'
import Blobity from 'blobity';
up.link.config.followSelectors.push('a[href]')
up.form.config.submitSelectors.push(['form'])
const options = { color: 'rgb(180, 180, 180)' };
new Blobity(options);