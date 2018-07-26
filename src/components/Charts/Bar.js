import {Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins;

export default {
    extends: Bar,
    mixins: [reactiveProp],
    props: ["options", "data"],
    data () {
        return {
            datacollection: {
                labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#505464',
                        hoverBackgroundColor: '#2196f3',
                       // data: [40, 30, 59, 30, 25, 33, 26, 23, 48, 54, 48, 62]
                        data: this.chartData
                    }
                ]
            }
        }
    },
    mounted () {
        this.renderChart(this.datacollection, {responsive: true, maintainAspectRatio: false})
    },
    computed: {
        chartData: function() {
            return this.data;
        }
    }
}