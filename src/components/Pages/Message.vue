<template>
    <div>
        <h1>Message</h1>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                usersArr: []
            }
        },
        methods:{
            getUsers(){
                this.usersArr = this.$store.state.usersChat;
            }
        },
        created(){
            this.getUsers();
        }
    }
</script>

<style scoped>

</style>