
import VueRouter from 'vue-router';
import APP from '../App/main.vue';
import m from '../mainContainer/main.vue';

import sign from '../../home/SignPage/main.vue';
import client from '../../home/SignPage/client.vue';
import supplier from '../../home/SignPage/supplier.vue';

Vue.use(VueRouter);

/**路由表**/
const routesMap = [
    {
        path: '/',
        redirect:'/sign',
        component:APP,
        children:[
            {
                path: '/a/m',
                component:m,
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