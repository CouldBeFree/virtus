<template>
    <div class="progress">
       <!-- <div class="card-item" v-for="item in status" :key="item.id">
            {{item.projectName}}
        </div>-->
        <draggable element="span" v-model="status" :options="dragOptions" :move="onMove">
            <transition-group name="list-complete" :name="'flip-list'">
                <div class="card-item" v-for="item in status" :key="item.id">
                    <div class="project-title">
                        <p>{{item.projectName}}</p>
                        <span>{{item.company}}</span>
                    </div>
                    <div class="value">
                        <p>${{item.value}}</p>
                    </div>
                    <div class="time">
                        <p>{{item.spentHours}} hours</p>
                    </div>
                    <div class="progress-item">
                        <span>{{item.progress}}</span>
                        <div class="progress-bar">
                            <div class="progress-bar-inner"></div>
                        </div>
                    </div>
                    <div class="development">
                        <p>{{item.status}}</p>
                    </div>
                    <div class="asigned">
                        <p>{{item.assignedName}}</p>
                        <span>{{item.assignedPosition}}</span>
                    </div>
                </div>
            </transition-group>
        </draggable>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'

    export default {
        name: "Status",
        components: {
            draggable
        },
        data(){
            return{
                width: 0,
                status: [],
                editable:true,
                isDragging: false,
                delayedDragging:false
            }
        },
        computed: {
            dragOptions () {
                return  {
                    animation: 0,
                    group: 'description',
                    disabled: !this.editable,
                    ghostClass: 'ghost'
                };
            },
            statusString(){
                return JSON.stringify(this.status, null, 2);
            },
            status2String(){
                return JSON.stringify(this.status2, null, 2);
            }
        },
        methods:{
            getStatus(){
                this.status = this.$store.state.statusArr
            },
            orderstatus () {
                this.status = this.status.sort((one,two) =>{return one.order-two.order; })
            },
            onMove ({relatedContext, draggedContext}) {
                const relatedElement = relatedContext.element;
                const draggedElement = draggedContext.element;
                return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
            }
        },
        watch: {
            isDragging (newValue) {
                if (newValue){
                    this.delayedDragging= true;
                    return
                }
                this.$nextTick( () =>{
                    this.delayedDragging =false
                })
            }
        },
        mounted(){
            this.getStatus()
        }
    }
</script>

<style scoped lang="scss">
    .progress{
        flex-basis: 100%;
        padding: 60px 20px 0 35px;
        background: #292b3a;
        min-height: 100vh;
        font-family: 'Montserrat', sans-serif;

        .card-item{
            padding: 20px 0 20px 40px;
            background: #3a3e52;
            margin-bottom: 23px;
            border-radius: 2px;
            cursor: move;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .project-title, .asigned{
                p{
                    margin-top: 0;
                    color: #ffff;
                    margin-bottom: 5px;
                }

                span{
                    font-size: 14px;
                    color: #9ea3b4;
                }
            }

            .value, .time, .development{
                p{
                    color: #ffff;
                }
            }

            .progress-item{
                flex-basis: 285px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                span{
                    color: #ffff;
                }

                .progress-bar{
                    position: relative;
                    max-width: 235px;
                    width: 100%;
                    border-radius: 2px;
                    height: 7px;
                    background: #585c70;

                    .progress-bar-inner{
                        position: absolute;
                        left: 0;
                        height: 100%;
                        background: #2196f3;
                        border-radius: 2px;
                        width: 80%;
                    }
                }
            }
        }
    }

    .flip-list-move {
        transition: transform 0.5s;
    }

    .no-move {
        transition: transform 0s;
    }

    .ghost {
        opacity: .5;
        background: #C8EBFB;
    }

    .list-group {
        min-height: 20px;
    }

    .list-group-item {
        cursor: move;
    }

    .list-group-item i{
        cursor: pointer;
    }
</style>