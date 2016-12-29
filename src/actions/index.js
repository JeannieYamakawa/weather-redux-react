import axios from 'axios';

const API_KEY = '1bf9a62a0a627eb75913f53f9dc402e0';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//the purpose of making the type a variable is to keep the action's TYPE consistent between the action creator and the reducer. i.e. prevent bugs.
export const FETCH_WEATHER = 'FETCH_WEATHER';


//make API request to fetch weather data.
export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    //line below returns a promise, but Redux-Promise middleware interprets and resolves/translates it into actual data instead.
    const request = axios.get(url);
    // console.log('Request:', request);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
