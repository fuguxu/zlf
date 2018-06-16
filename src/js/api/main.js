import axios from 'axios';
import qs from 'qs';

axios.defaults.validateStatus=(status)=>{
    if (status === 401) {//没登陆
        localStorage.removeItem('role');
        localStorage.removeItem('zlfuserInfo');
        window.location.href='/home.html';
        return false;
    } else {
        return true
    };
}




var TIME_OUT=50000;

var zlf_base_prefix

if(__DEV__){
    zlf_base_prefix = 0?'https://api.zulifangs.com':'http://ming849358679.imwork.net:12625/api-zlf';
}else if(__PROD__){
    
}

const base_axios_options = {
    withCredentials:true,
    // timeout:TIME_OUT,
    headers: { 'Content-Type': 'application/json' }
};

const customer_base = `${zlf_base_prefix}`;
const customerAxios = axios.create(Object.assign({}, { baseURL: `${customer_base}`}, base_axios_options));
export const customerModule={
    //新闻列表
    getNewsList:params => { return customerAxios.get('/article/getByPage', {params:params}).then(res => res.data); },
    //新闻详情
    getNewsDetail:params => { return customerAxios.get('/article/getArticleDetail', {params:params}).then(res => res.data); },
    //客户注册接口
    registerCustorm:params => { return customerAxios.post('/customers/register', params).then(res => res.data); },
    //检验公司名字是否注册
    checkInfo:params => { return customerAxios.post('/user/checkInfo', params).then(res => res.data); },
    //获取验证码
    getVerification:params => { return customerAxios.get('/verification', {params:params}).then(res => res.data); },
    //重新绑定邮箱时 获取验证码
    verificationMail:params => { return customerAxios.get('/verificationMail', {params:params}).then(res => res.data); },
    //绑定邮箱接口
    changeMail:params => { return customerAxios.get('/changeMail', {params:params}).then(res => res.data); },
    //保存客户信息联系人
    saveOrderCustomerInfo:params => { return customerAxios.post('/user/perfectUser', params).then(res => res.data); },
    //租赁测算体验
    calculation:params => { return customerAxios.post('/calcul/calculation', params).then(res => res.data); },
    //客户新建项目
    saveCustomerItem:params => { return customerAxios.post('/customers/save', params).then(res => res.data); },
    //获取所有项目
    getOrderInfoList:params => { return customerAxios.get('/customers/getOrderInfoList').then(res => res.data); },
    //获取租赁服务
    getRentService:params => { return customerAxios.get('/customers/getNewProjectMenu', {params:params}).then(res => res.data); },
    //保存项目联系人
    saveProjectPersonInfo:params => { return customerAxios.post('/customers/saveOrderCustomerInfo', params).then(res => res.data); },
    //获取项目联系人
    getOrderCustomerInfo:params => { return customerAxios.get('/customers/getOrderCustomerInfo', {params:params}).then(res => res.data); },
    //获取租赁物
    getLease:params => { return customerAxios.get('/getLease', {params:params}).then(res => res.data); },
    //保存供应商联系人接口
    changeSupplierUser:params => { return customerAxios.post('/supplier/changeUser', params).then(res => res.data); },
    //保存产品清单
    saveProductComm:params => { return customerAxios.post('/customers/saveProductComm', params).then(res => res.data); },
    //获取项目详情
    getProjectInfo:params => { return customerAxios.get('/customers/getProjectInfo', {params:params}).then(res => res.data); },
    //获取指定供应商信息
    getAppointSupplier:params => { return customerAxios.get('/customers/getAppointSupplier', {params:params}).then(res => res.data); },
    //获取推荐供应商
    getRecommendSupplier:params => { return customerAxios.get('/customers/getRecommendSupplier', {params:params}).then(res => res.data); },
    
    //供应商注册
    registerSupplier:params => { return customerAxios.post('/supplier/register', params).then(res => res.data); },

    //登录接口
    login:params => { return customerAxios.post('/login?'+ qs.stringify(params)).then(res => res.data); },
    //退出登陆接口
    logout:params => { return customerAxios.post('/logout').then(res => res.data); },
    //上传接口 
    upload:params => { return customerAxios.post('/updateContent', params).then(res => res.data); },
    //多文件上传
    mulUploadFile:params => { return customerAxios.post('/mulUploadFile', params).then(res => res.data); },
    //获取市场客户登陆人信息
    getCurrentUser:params => { return customerAxios.post('/getUser').then(res => res.data); },
    //获取供应商登陆人信息
    getSupplierUser:params => { return customerAxios.get('/supplier/getUser').then(res => res.data); },
    //获取供应商资料
    getDatum:params => { return customerAxios.get('/supplier/getDatum').then(res => res.data); },
    //获取供应商扩展信息
    getExtSupplier:params => { return customerAxios.get('/supplier/getExtSupplier').then(res => res.data); },
    //推荐值开关
    openRecom:params => { return customerAxios.get('/supplier/openRecom', {params:params}).then(res => res.data); },
    //获取推荐值
    getRecommResult:params => { return customerAxios.get('/supplier/getRecommResult').then(res => res.data); },
    //保存推荐详情
    saveRecommend:params => { return customerAxios.post('/supplier/saveRecommend', params).then(res => res.data); },
    //获取推荐详情
    getRecommend:params => { return customerAxios.get('/supplier/getRecommend').then(res => res.data); },

    //获取消息接口
    getMsg:params => { return customerAxios.get('/msg/getMsg', {params:params}).then(res => res.data); },
    getMsgDetail:params => { return customerAxios.get('/msg/getMsgDetail', {params:params}).then(res => res.data); },
    getNotReadNum:params => { return customerAxios.get('/msg/getNotReadNum', {params:params}).then(res => res.data); },
}

customerAxios.interceptors.response.use( (response)=> {
    // 对响应数据做点什么
    if(response.data.statusCode=='401'){
        // localStorage.removeItem('role');
        // localStorage.removeItem('zlfuserInfo');
        // window.location.href='/home.html';
    }
    return response;
  },  (error)=>{
    // 对响应错误做点什么
    return Promise.reject(error);
  });