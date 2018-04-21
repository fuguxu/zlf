
import El from '../lib/el/main.js';
import App from '../App/main.vue';
import router from '../home/Route/main.js';
import es6Promise from 'es6-promise';

import '../../css/base';
// ie兼容promise
es6Promise.polyfill();

El.initElement();


new Vue({
    router:router,
    render: h => h(App),
}).$mount('#app');