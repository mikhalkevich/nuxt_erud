import axios from 'axios';
//import {store} from  '@/store/index';
export default defineNuxtPlugin(nuxtApp => {
    //console.log(store.state.token);
    axios.defaults.baseURL = 'http://localhost:8000/api/';
    axios.defaults.headers["content-type"] = "application/json";
    axios.defaults.headers.common.authorization = `Bearer `;
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
});

