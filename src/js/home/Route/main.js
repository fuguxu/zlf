
import VueRouter from 'vue-router';
import APP from '../App/main.vue';
import homePage from '../homePage/main.vue';

import coorperationPage from '../coorperationPage/main.vue';
import coorperationList from '../coorperationPage/coorperationList.vue';
import coorperationDetail from '../coorperationPage/coorperationDetail.vue';

import servicePage from '../servicePage/main.vue';

import newsPage from '../newsPage/main.vue';
import newsList from '../newsPage/newsList.vue';
import newsDetail from '../newsPage/newsDetail.vue';

import businessPage from '../businessPage/main.vue';

import aboutPage from '../aboutPage/main.vue';
import aboutUs from '../aboutPage/aboutUs.vue';
import teamHonor from '../aboutPage/teamHonor.vue';
import questionAnswer from '../aboutPage/qs.vue';
import contact from '../aboutPage/contact.vue';
import joinUs from '../aboutPage/joinUs.vue';

import sign from '../SignPage/main.vue';
import client from '../SignPage/client.vue';
import supplier from '../SignPage/supplier.vue';

Vue.use(VueRouter);

/**路由表**/
const routesMap = [
    {
        path: '/',
        redirect:'/home',
        component:APP,
        children:[
            {
                path: '/home',
                name:'首页',
                component:homePage,
            },
            {
                path: '/service',
                name:'产品',
                component:servicePage,
            },
            {
                path: '/coorperation',
                name:'合作案例',
                redirect:'/coorperation/list',
                component:coorperationPage,
                children:[
                    {
                        path:'/coorperation/list',
                        name:'案例列表',
                        component:coorperationList,
                    },
                    {
                        path:'/coorperation/detail',
                        name:'案例详情',
                        component:coorperationDetail,
                    }
                ]
            },
            
            {
                path: '/news',
                name:'新闻资讯',
                component:newsPage,
                redirect:'/news/list',
                children:[
                    {
                        path:'/news/list',
                        name:'新闻列表',
                        component:newsList,
                    },
                    {
                        path:'/news/detail',
                        name:'新闻详情',
                        component:newsDetail,
                    }
                ]
            },
            {
                path: '/business',
                name:'商务合作',
                component:businessPage,
                showChildren:true,
                dropMenu:[
                    {
                        path:'/business',
                        name:'供应商进驻',
                        // component:newsList,
                    },
                    {
                        path:'/business',
                        name:'媒体合作',
                        // component:newsDetail,
                    }
                ]
            },
            {
                path: '/about',
                name:'关于我们',
                redirect:'/about/us',
                component:aboutPage,
                showChildren:true,
                children:[
                    {
                        path:'/about/us',
                        name:'品牌精神',
                        component:aboutUs,
                    },
                    {
                        path:'/about/team',
                        name:'团队荣誉',
                        component:teamHonor,
                    },
                    {
                        path:'/about/qs',
                        name:'常见问题',
                        component:questionAnswer,
                    },
                    {
                        path:'/about/contact',
                        name:'联系我们',
                        component:contact,
                        hide:true
                    },
                    {
                        path:'/about/join',
                        name:'加入我们',
                        component:joinUs,
                        hide:true
                    }
                ]
            },
            {
                path: '/sign',
                name:'注册',
                hidden:true,
                hideBackTop:true,
                component:sign,
                redirect:'/sign/client',
                children:[
                    {
                        path:'/sign/client',
                        name:'客户开通新账号',
                        meta:{
                            hideBackTop:true,
                        },
                        component:client,
                    },
                    {
                        path:'/sign/supplier',
                        name:'供应商进驻平台',
                        meta:{
                            hideBackTop:true,
                        },
                        component:supplier,
                    }
                ]
            },
        ]
    }
];

/**路由配置**/
const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes: routesMap,
});

router.beforeEach((to, from, next) => {
    //前端校验登录
    next()
});
router.afterEach(router => {
    if(document.body){
        document.body.scrollTop=0
    }
    if(document.documentElement){
        document.documentElement.scrollTop=0
    }
    
});
export default router;