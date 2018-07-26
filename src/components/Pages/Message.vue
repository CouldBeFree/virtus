<template>
    <div>
        <h1>Message</h1>
        <line-chart :chart-data="datacollection"></line-chart>
        <button @click="fillData()">Randomize</button>
    </div>
</template>

<script>
    import LineChart from '../Charts/LineChart'
    export default {
        components: {
            'line-chart' : LineChart
        },
        data () {
            return {
                datacollection : {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
                    datasets: [
                               {label: 'My activities', backdropColor: '#dd4b39', data: [40, 39, 31, 11, 45, 50]}
                           ]
                }
            }
        },
        mounted () {
        }
    }
</script>

<style scoped>

</style>