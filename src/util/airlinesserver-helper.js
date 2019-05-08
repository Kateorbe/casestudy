import {getAirlinesPassengerURL, getAirlinesFlightURL} from './airlinesserver-url';
import axios from 'axios';

const getAirlinesPassenger = () => {
    return axios.get(getAirlinesPassengerURL)
}

const getAirlinesFlight = () => {
    return axios.get(getAirlinesFlightURL)
}

export {
    getAirlinesPassenger,
    getAirlinesFlight
}