import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        data: [20, 50, 20, 41, 26, 15, 20, 10, 29, 5, 33, 55],
        quened: [
            {
                project: 'AI development',
                client: 'Tesla',
                fixed: false,
                price: 5000,
                id: 1
            },
            {
                project: 'Blockchain integration',
                client: 'Tesla',
                fixed: false,
                price: 2500,
                id: 112
            },
            {
                project: 'Chatbot',
                client: 'T-Mobile',
                fixed: false,
                price: 6500,
                id: 13
            }
        ]
    },
    mutations: {
        changeChart (state){
            state.data = [10, 30, 34, 23, 11, 15, 55, 30, 19, 35, 43, 21]
        }
    }
})