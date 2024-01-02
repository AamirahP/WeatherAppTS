import axios from "axios";

export default axios.create ({
    baseURL: `https://api.openweathermap.org`,
    params: {
        key: '5e0d79d511e1ab5f09cd6435c9e76dcb',
        units: 'metric'
    }


})

