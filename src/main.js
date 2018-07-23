import Vue from 'vue'
import router from './router/index'
import VueRouter from 'vue-router'
import VCalendar from 'v-calendar';
import 'v-calendar/lib/v-calendar.min.css';

import App from './App.vue'
import Message from './components/Pages/Message'
import Graph from './components/Pages/Graph'
import Trello from './components/Pages/Trello'
import Status from './components/Pages/Status'
import Home from './components/Pages/Home'
import VueResource from 'vue-resource'
import Vuelidate from 'vuelidate'
import store from './store/index'
import 'chart.js'
import 'hchs-vue-charts'

Vue.use(window.VueCharts);
Vue.use(Vuelidate);
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VCalendar, {
    locale: 'en'
});

Vue.config.productionTip = false;
Vue.component('message', Message);
Vue.component('graph', Graph);
Vue.component('trello', Trello);
Vue.component('status', Status);
Vue.component('Home', Home);

new Vue({
  render: h => h(App),
    router,
    store
}).$mount('#app');