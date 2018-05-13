
import VueRouter from 'vue-router';
import APP from '../App/main.vue';

import sign from '../../home/SignPage/main.vue';
import client from '../../home/SignPage/client.vue';
import supplier from '../../home/SignPage/supplier.vue';

import clientLicence from '../clientLicence/main.vue';
import submited from '../submited/main.vue';

import recommend from '../recommend/main.vue';

import accountCenter from '../AccountCenter/main.vue';
import accountInformation from '../AccountCenter/accountInformation.vue';
import contactPerson from '../AccountCenter/contactPerson.vue';
import email from '../AccountCenter/bindEmail.vue';

import message from '../Message/main.vue';
import messageAll from '../Message/messageAll.vue';
import messageUnread from '../Message/messageUnread.vue';
import messageRead from '../Message/messageRead.vue';
import messageList from '../Message/messageList.vue';
import messageDetail from '../Message/messageDetail.vue';

Vue.use(VueRouter);

/**路由表**/
const routesMap = [
    {
        path: '/',
        redirect:'/licence',
        component:APP,
        children:[
            {
                path:'/licence',
                name:'上传营业执照',
                component:clientLicence
            },
            {
                path:'/submited',
                name:'提交成功',
                component:submited
            },
            {
                path:'/recommend',
                name:'推荐值',
                component:recommend
            },
            {
                path: '/sign',
                name:'注册',
                component:sign,
                redirect:'/sign/client',
                children:[
                    {
                        path:'/sign/client',
                        name:'客户开通新账号',
                        component:client,
                    },
                    {
                        path:'/sign/supplier',
                        name:'供应商进驻平台',
                        component:supplier,
                    }
                ]
            },           
            {
                path:'/message',
                name:'消息中心',
                component:message,
                redirect:'/message/all',
                children:[
                    {
                        path:'/message/all',
                        name:'全部消息',
                        component:messageAll,
                        redirect:'/message/all/list',
                        children:[
                            {
                                path:'/message/all/list',
                                name:'全部消息列表',
                                component:messageList
                            },
                            {
                                path:'/message/all/detail',
                                name:'全部消息详情',
                                component:messageDetail
                            }
                        ]
                    },
                    {
                        path:'/message/unread',
                        name:'未读消息',
                        component:messageUnread,
                        redirect:'/message/unread/list',
                        children:[
                            {
                                path:'/message/unread/list',
                                name:'未读消息列表',
                                component:messageList
                            },
                            {
                                path:'/message/unread/detail',
                                name:'未读消息详情',
                                component:messageDetail
                            }
                        ]
                    },
                    {
                        path:'/message/read',
                        name:'已读消息',
                        component:messageRead,
                        redirect:'/message/read/list',
                        children:[
                            {
                                path:'/message/read/list',
                                name:'已读消息列表',
                                component:messageList
                            },
                            {
                                path:'/message/read/detail',
                                name:'已读消息详情',
                                component:messageDetail
                            }
                        ]
                    }
                ]
            },
            {
                path:'/account',
                name:'账号中心',
                component:accountCenter,
                children:[
                    {
                        name:'账号资料',
                        path:'/account/information',
                        component:accountInformation
                    },
                    {
                        name:'联系人信息',
                        path:'/account/contact',
                        component:contactPerson
                    },
                    {
                        name:'重新绑定邮箱',
                        path:'/account/email',
                        component:email
                    }
                ]
            }
        ]
    }
];

/**路由配置**/
const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes: routesMap
});

router.beforeEach((to, from, next) => {
    //前端校验登录
    next()
});

export default router;