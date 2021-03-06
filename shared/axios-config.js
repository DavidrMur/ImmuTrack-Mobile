import axios from 'axios';

const instance = axios.create();
instance.interceptors.request.use(function (config) {
    let newConfig = {...config}
    if (localStorage.getItem("jwtToken") !== null) {
        if (newConfig.data === undefined) newConfig.data = { token: JSON.parse(localStorage.getItem('jwtToken')).token }
        else newConfig.data.token = JSON.parse(localStorage.getItem('jwtToken')).token
    }
    return newConfig
});

export default instance;