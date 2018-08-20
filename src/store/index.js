import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        data: [20, 50, 20, 41, 26, 15, 20, 10, 29, 5, 33, 55],
        quenedStore: [
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
                client: 'Google',
                fixed: false,
                price: 6500,
                id: 13
            }
        ],
        planningStore : [
            {
                project: 'Landing page',
                client: 'Amazon',
                fixed: false,
                price: 1000,
                id: 14
            },
            {
                project: 'Website',
                client: 'Google',
                fixed: false,
                price: 2000,
                id: 100
            },
            {
                project: 'Website',
                client: 'Google',
                fixed: false,
                price: 500,
                id: 1121
            }
        ],
        designStore: [
            {
                project: 'Logo design',
                client: 'Symu.com',
                fixed: false,
                price: 2000,
                id: 19
            }
        ],
        developmentStore: [
            {
                project: 'Mobile App',
                client: 'Symu.com',
                fixed: false,
                price: 1500,
                id: 111
            },
            {
                project: 'Dashboard',
                client: 'Tesla',
                fixed: false,
                price: 5500,
                id: 1114
            }
        ],
        testingStore: [
            {
                project: 'Landing page',
                client: 'Symu.com',
                fixed: false,
                price: 1500,
                id: 874
            }
        ],
        completedStore: [
            {
                project: 'Landing page',
                client: 'Symu.com',
                fixed: false,
                price: 1800,
                id: 84
            },
            {
                project: 'New website',
                client: 'Amazon',
                fixed: false,
                price: 3500,
                id: 8421
            },
            {
                project: 'Dashboard',
                client: 'Amazon',
                fixed: false,
                price: 3500,
                id: 821
            }
        ],
        statusArr: [
            {
                projectName: 'New website',
                company: 'Microsoft',
                value: 2300,
                spentHours: 40,
                progress: 70,
                status: 'Development',
                assignedName: 'Dominic Lynton',
                assignedPosition: 'Front End Dev',
                id: 1
            },
            {
                projectName: 'Landing page',
                company: 'Google',
                value: 1250,
                spentHours: 7,
                progress: 15,
                status: 'Planning',
                assignedName: 'Lyan Roach',
                assignedPosition: 'UX/UI Designer',
                id: 2
            },
            {
                projectName: 'New dashboard',
                company: 'Symu.co',
                value: 5100,
                spentHours: 56,
                progress: 100,
                status: 'Design',
                assignedName: 'Michelle Stewart',
                assignedPosition: 'Account',
                id: 3
            },
            {
                projectName: 'New logo',
                company: 'JCD.pl',
                value: 900,
                spentHours: 10,
                progress: 40,
                status: 'Design',
                assignedName: 'Lyan Roach',
                assignedPosition: 'UX/UI Designer',
                id: 4
            },
            {
                projectName: 'Landing page',
                company: 'Symu.co',
                value: 1500,
                spentHours: 0,
                progress: 0,
                status: 'Quened',
                assignedName: 'Michelle Stewart',
                assignedPosition: 'Account',
                id: 5
            },
            {
                projectName: 'Wordpress theme',
                company: 'Themeforest',
                value: 1300,
                spentHours: 30,
                progress: 100,
                status: 'Completed',
                assignedName: 'Michelle Stewart',
                assignedPosition: 'Account',
                id: 8
            },
            {
                projectName: 'Landing page',
                company: 'Symu.co',
                value: 1500,
                spentHours: 0,
                progress: 0,
                status: 'Quened',
                assignedName: 'Michelle Stewart',
                assignedPosition: 'Account',
                id: 6
            },
            {
                projectName: 'Mobile app',
                company: 'Facebook',
                value: 4300,
                spentHours: 59,
                progress: 100,
                status: 'Completed',
                assignedName: 'Michelle Stewart',
                assignedPosition: 'Account',
                id: 7
            }
        ],
        graphArr: [
            {
                id:1,
                name: 'Lorem ipsum dolor sit amet tetur adipisicing elit',
                time: 6,
                views: 358000,
                visitors: 58200,
                ctr: 25,
                cpc: 3.02,
                cpv: 2.51,
                cpm: 28.35,
                status: 'Active'
            },
            {
                id:2,
                name: 'Sed do eiusmod tempor incididunt ut labo',
                time: 7,
                views: 1200,
                visitors: 800,
                ctr: 10,
                cpc: 8.45,
                cpv: 6.15,
                cpm: 45.22,
                status: 'Disable'
            },
            {
                id:3,
                name: 'Consectetur adipisicing elit sed do eiusmod tempor',
                time: 3,
                views: 69000,
                visitors: 7300,
                ctr: 19,
                cpc: 6.22,
                cpv: 3.90,
                cpm: 37.80,
                status: 'Active'
            }
        ]
    },
    mutations: {
        changeChart (state){
            state.data = [10, 30, 34, 23, 11, 15, 55, 30, 19, 35, 43, 21]
        }
    }
})