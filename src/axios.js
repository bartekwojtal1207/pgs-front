import axios from 'axios';


const instace = axios.create({
    baseURL: 'https://makevoid-skicams.p.mashape.com/cams.json',
});

instace.defaults.headers.common['X-Mashape-key'] = 'kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw';

export default instace;