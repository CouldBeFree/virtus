<template>
    <div class="chat-wrap">
        <div class="users-list">
            <ul class="users-holder">
                <li class="users-holder-item" v-for="item in usersArr" :key="item.id">
                    <div class="top-part"><span class="name">{{item.name}}</span></div>
                    <div class="bottom-part">{{item.lastMessage}}</div>
                </li>
            </ul>
        </div>
        <div class="chat-window"></div>
        <div class="user-info"></div>
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

<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700');

    .chat-wrap{
        font-family: 'Montserrat', sans-serif;
        flex-basis: 100%;
        display: flex;
        justify-content: space-between;
        background: #2a2d3c;

        .users-list{
            flex-basis: 30%;
            border: 1px solid red;
            padding-left: 20px;
            padding-right: 10px;
            box-sizing: border-box;

            .users-holder{
                list-style-type: none;
                padding: 0;
                margin: 0;
            }

            .name{
                font-size: 22px;
                color: white;
                font-weight: bold;
            }

            .bottom-part{
                color: #9ca1b2;
            }
        }

        .chat-window{
            flex-basis: 50%;
            border: 1px solid red;
        }

        .user-info{
            flex-basis: 17%;
            border: 1px solid red;
        }
    }
</style>