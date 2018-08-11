<template>
    <li class="list-group-item">
        <div class="project">
            {{item.project}}
        </div>
        <div class="project-description">{{item.client}} {{item.price}}$</div>
        <ul class="dots-holder" @click="popup=!popup">
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <div class="popup" v-if="popup">
            Delete
        </div>
    </li>
</template>

<script>
    export default {
        name: "Card-design",
        props: ['item'],
        data () {
            return {
                popup: false
            }
        }
    }
</script>

<style scoped lang="scss">

    .project{
        color: white;
        margin-bottom: 5px;
    }

    .project-description{
        font-size: 14px;
        color: #9ea3b4;
    }

    .list-group {
        min-height: 100px;
        padding: 0;
        list-style-type: none;
        margin-right: 20px;
        width: 250px;
        position: relative;

        .popup{
            position: absolute;
            background: white;
            cursor: pointer;
        }

        &-item{
            cursor: move;
            margin-bottom: 20px;
            padding: 28px 23px;
            background: #3a3e52;
            border-radius: 5px;
            position: relative;

            .dots-holder{
                position: absolute;
                display: flex;
                flex-direction: column;
                margin: 0;
                padding: 0;
                cursor: pointer;
                list-style-type: none;
                right: 20px;
                bottom: 35px;

                li{
                    width: 5px;
                    height: 5px;
                    background: #9ea3b4;
                    border-color: #9ea3b4;
                    border-radius: 50%;

                    &:not(:last-child){
                        margin-bottom: 5px;
                    }
                }
            }

            i{
                cursor: pointer;
            }
        }
    }

</style>