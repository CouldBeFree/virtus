<template>
    <div class="window-item">
        <ul class="chat-holder">
            <li v-for="item in object.messages" :key="item"><p>{{item}}</p></li>
        </ul>
        <input type="text">
    </div>
</template>

<script>
    export default {
        name: "chatWindow",
        data(){
          return{

          }
        },
        props: ['object']
    }
</script>

<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700');

    .window-item{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .chat-holder{
            list-style-type: none;
            margin: 0;
            padding: 0;
            height: 100%;

            li{
                &:nth-child(2n){
                    text-align: right;
                }
            }

            p{
                color: white;
            }
        }
    }
</style>