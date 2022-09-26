import axios from 'axios';
import querystring from 'query-string';

const config = {
    //base: 'http://43.205.204.223/api',
    base: 'https://api2.tryme.info/api',
};

const route = (api) => {
    return api ? `${config.base}/${api}` : null;
}

const get = (url, data) => {
    let apiUrl = url + '?' + querystring.stringify(data);

    return axios.get(apiUrl).then(response => response.data);
};

const exports = {config, route, get};

export default exports;
