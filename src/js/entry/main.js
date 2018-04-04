
import El from '../lib/el/main';
import App from '../App/main.vue';
import router from '../module/Route/main';
import es6Promise from 'es6-promise';

import '../../css/base';
// ie兼容promise
es6Promise.polyfill();

El.initElement();


new Vue({
    router:router,
    render: h => h(App),
}).$mount('#app');