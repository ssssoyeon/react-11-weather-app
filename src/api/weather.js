import axios from "axios";

const API_KEY = 'b02690c976b3bc1b44b69c189d7f1552'

export const fetchWeatherByCoords = async(lat, lon)=>{
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params:{
            lat,
            lon,
            units: 'metric',
            lang: 'kr',
            appid: API_KEY
        }
    })

    return res.data
}