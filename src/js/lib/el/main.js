/**
 * Created by Veket on 2017/10/28.
 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index';

global.Vue = window.Vue = Vue;
global.Bus = window.Bus = new Vue();//此Bus也用于js文件中的多语言

export default {
    initElement(){
        Vue.use(ElementUI);
    }
}