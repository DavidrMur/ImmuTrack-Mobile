import axios from 'axios';

const instance = axios.create();
instance.interceptors.request.use(function (config) {
    let newConfig = {...config}
    if (typeof(newConfig.data) !== "object") {
        let data = newConfig.data;
        newConfig.data = {data}
    }
    if (localStorage.getItem("jwtToken") !== null) newConfig.data.token = localStorage.getItem("jwtToken");
    return newConfig
});

export default instance;