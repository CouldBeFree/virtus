<template>
    <div class="target-item">
        <p>{{object.name}}</p>
        <p>{{object.position}}</p>
        <p>{{object.description}}</p>
        <p>{{object.email}}</p>
        <p>{{object.phone}}</p>
        <p>{{object.adress}}</p>
        <p>{{object.organisation}}</p>
    </div>
</template>

<script>
    export default {
        name: "messageTarget",
        data(){
            return{
            }
        },
        props:['object']
    }
</script>

<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700');

    .target-item{
        p{
            color: white;
        }
    }
</style>