<template>
    <div>
        <h1>Trello</h1>
        <div class="list-holder">

            <draggable class="list-group" element="ul" v-model="list" :options="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                <transition-group type="transition" :name="'flip-list'">
                    <li class="list-group-item" v-for="element in list" :key="element.order">
                        <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
                        {{element.name}}
                        <span class="badge">{{element.order}}</span>
                    </li>
                </transition-group>
            </draggable>

            <draggable element="span" v-model="testArr" :options="dragOptions" :move="onMove">
                <transition-group name="no" class="list-group" tag="ul">
                    <li class="list-group-item" v-for="element in testArr" :key="element.client">
                        <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
                        {{element.project}} {{element.client}}
                        <div>{{element.price}}</div>
                        <span class="badge">{{element.order}}</span>
                    </li>
                </transition-group>
            </draggable>

        </div>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    const message = [ 'vue.draggable', 'draggable', 'component', 'for', 'vue.js 2.0', 'based' , 'on', 'Sortablejs' ];
    const testArr = [
        {
            project: 'Landing page',
            client: 'Amazon'
        }
    ];

    export default {
        name: "Trello",
        components: {
            draggable,
        },
        data () {
            return {
                list: message.map( (name,index) => {return {name, order: index+1, fixed: false}; }),
                //list2: testArr.map( (name,index) => {return {name, order: index+1, fixed: false}; }),
                testArr : [
                    {
                        project: 'Landing page',
                        client: 'Amazon',
                        fixed: false,
                        price: 1000
                    },
                    {
                        project: 'Website',
                        client: 'Google',
                        fixed: false,
                        price: 2000
                    },
                    {
                        project: 'Website',
                        client: 'Google',
                        fixed: false,
                        price: 500
                    }
                ],
                priceSum: {},
                editable:true,
                isDragging: false,
                delayedDragging:false
            }
        },
        methods:{
            orderList () {
                this.list = this.list.sort((one,two) =>{return one.order-two.order; })
            },
            onMove ({relatedContext, draggedContext}) {
                const relatedElement = relatedContext.element;
                const draggedElement = draggedContext.element;
                return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
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
            pricesSum(){
                this.testArr.reduce((prev, cur) => {
                    return this.priceSum = prev + cur.price
                }, 0)
            }
        },
        watch: {
            isDragging (newValue) {
                if (newValue){
                    this.delayedDragging = true;
                    return
                }
                this.$nextTick( () =>{
                    this.delayedDragging = false
                })
            }
        },
        mounted(){
            this.pricesSum()
        }
    }
</script>

<style scoped lang="scss">
    .list-holder{
        display: flex;
        justify-content: space-between;
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