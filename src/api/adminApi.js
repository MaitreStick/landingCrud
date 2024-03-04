import axios from 'axios'


const adminApi = axios.create({
    baseURL: 'yourFirebaseAPI'
})


adminApi.interceptors.request.use( (config) => {

    config.params = {
        auth: localStorage.getItem('idToken')
    }

    return config
})


export default adminApi