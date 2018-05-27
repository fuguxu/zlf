import axios from 'axios';
import qs from 'qs';

var TIME_OUT=50000;

var zlf_base_prefix

if(__DEV__){
    zlf_base_prefix = 'http://ming849358679.imwork.net:12625';
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
    //新闻列表
    getNewsList:params => { return customerAxios.get('/article/getByPage', {params:params}).then(res => res.data); },
    //新闻详情
    getNewsDetail:params => { return customerAxios.get('/article/getArticleDetail', {params:params}).then(res => res.data); },
    //客户注册
    registerCustorm:params => { return customerAxios.post('/customers/register', params).then(res => res.data); },
    //获取验证码
    getVerification:params => { return customerAxios.get('/verification', {params:params}).then(res => res.data); },
    //保存客户信息联系人
    saveOrderCustomerInfo:params => { return customerAxios.post('/customers/saveOrderCustomerInfo', params).then(res => res.data); },


    //供应商注册
    registerSupplier:params => { return customerAxios.post('/supplier/register', params).then(res => res.data); },
}