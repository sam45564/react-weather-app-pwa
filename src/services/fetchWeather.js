import axios from 'axios';

const ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather';
const APIKEY = 'b4b3d6bc6bd7358aca23abfdc559dd79';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(ENDPOINT, {
        params: {
            q: query,
            units: 'metric',
            APPID: APIKEY
        }
    });

    return data;
}
