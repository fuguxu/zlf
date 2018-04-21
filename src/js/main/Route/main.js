
import VueRouter from 'vue-router';
import APP from '../App/main.vue';
import m from '../mainContainer/main.vue';

Vue.use(VueRouter);

/**路由表**/
const routesMap = [
    {
        path: '/',
        redirect:'/a/m',
        component:APP,
        children:[
            {
                path: '/a/m',
                component:m,
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