import axios from 'axios';
import qs from 'qs';

var TIME_OUT=50000;

var zlf_base_prefix

if(__DEV__){
    zlf_base_prefix = 'http://ming849358679.imwork.net';
}else if(__PROD__){
    
}

const base_axios_options = {
    withCredentials:true,
    timeout:TIME_OUT,
    headers: { 'content-type': 'application/json' }
};

const customer_base = `${zlf_base_prefix}/api-zlf`;
const customerAxios = axios.create(Object.assign({}, { baseURL: `${customer_base}`}, base_axios_options));
export const customerModule={
    getNewsList:params => { return customerAxios.get('/article/getByPage', {params:params}).then(res => res.data); },
}