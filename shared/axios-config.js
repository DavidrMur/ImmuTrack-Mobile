import axios from 'axios';

const instance = axios.create();
instance.interceptors.request.use(function (config) {
    let newConfig = {...config}
    if (localStorage.getItem("jwtToken") !== null) {
        if (newConfig.data === undefined) newConfig.data = {token: localStorage.getItem("jwtToken").token}
        else newConfig.data.token = localStorage.getItem("jwtToken");
    }
    return newConfig
});

export default instance;