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
import VueChartJs from 'vue-chartjs';

Vue.use(window.VueCharts);
Vue.use(Vuelidate);
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VCalendar, {
    locale: 'en'
});

Vue.component('message', Message);
Vue.component('graph', Graph);
Vue.component('trello', Trello);
Vue.component('status', Status);
Vue.component('Home', Home);
Vue.component('bar-chart', {
    extends: VueChartJs.Bar,
    // mixins: [reactiveProp],
    props: ["data", "options"],// recieving props
    mounted() {
        this.renderBarChart();
    },
    computed: {
        chartData: function() {
            return this.data;
        }
    },
    methods: {
        renderBarChart: function() {
            this.renderChart({
                    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                    datasets: [{
                        label: 'Data One',
                        backgroundColor: '#505464',
                        hoverBackgroundColor: '#2196f3',
                        data: this.chartData
                    }
                    ]
                },
                { responsive: true, maintainAspectRatio: false }
            );
        }
    },
    watch: {
        data: function() {
            this.$data._chart.destroy();
            this.renderBarChart();
        }
    }
})

new Vue({
  render: h => h(App),
    router,
    store
}).$mount('#app');