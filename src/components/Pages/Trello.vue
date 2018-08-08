<template>
    <div class="trello-wrap">
        <div class="list-holder">

            <div class="wrapper-list">
                <div class="top-part">
                    <div class="top-part__name">
                        <h4>Quened</h4>
                    </div>
                    <div class="top-part__description">
                        <div class="project-count">{{quenedTot}} {{quenedTot > 1 ? 'projects' : 'project'}}</div>
                        <div class="total-price">${{totalQuen}}</div>
                    </div>
                </div>
                <draggable class="list-group" element="ul" v-model="quened" :options="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                    <transition-group type="transition" :name="'flip-list'">
                        <li class="list-group-item" v-for="element in quened" :key="element.id">
                            <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
                            <div class="project">
                                {{element.project}}
                            </div>
                            <div class="project-description">{{element.client}} {{element.price}}$</div>
                        </li>
                    </transition-group>
                </draggable>
            </div>

            <div class="wrapper-list">
                <div class="top-part">
                    <div class="top-part__name">
                        <h4>Planning</h4>
                    </div>
                    <div class="top-part__description">
                        <div class="project-count">{{planningArrLength}} {{planningArrLength > 1 ? 'projects' : 'project'}}</div>
                        <div class="total-price">${{planningTot}}</div>
                    </div>
                </div>
                <draggable element="span" v-model="planningArr" :options="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                    <transition-group name="no" class="list-group" tag="ul" :name="'flip-list'">
                        <li class="list-group-item" v-for="element in planningArr" :key="element.id">
                            <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
                            <div class="project">
                                {{element.project}}
                            </div>
                            <div class="project-description">{{element.client}} {{element.price}}$</div>
                        </li>
                    </transition-group>
                </draggable>
            </div>

            <div class="wrapper-list">
                <div class="top-part">
                    <div class="top-part__name">
                        <h4>Design</h4>
                    </div>
                    <div class="top-part__description">
                        <div class="project-count">{{designObj}} {{designObj > 1 ? 'projects' : 'project'}}</div>
                        <div class="total-price">${{designTot}}</div>
                    </div>
                </div>
                <draggable element="span" v-model="designArr" :options="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                    <transition-group name="no" class="list-group" tag="ul" :name="'flip-list'">
                        <li class="list-group-item" v-for="element in designArr" :key="element.id">
                            <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
                            <div class="project">
                                {{element.project}}
                            </div>
                            <div class="project-description">{{element.client}} {{element.price}}$</div>
                        </li>
                    </transition-group>
                </draggable>
            </div>

            <div class="wrapper-list">
                <div class="top-part">
                    <div class="top-part__name">
                        <h4>Development</h4>
                    </div>
                    <div class="top-part__description">
                        <div class="project-count">{{developObj}} {{developObj > 1 ? 'projects' : 'project'}}</div>
                        <div class="total-price">${{developTot}}</div>
                    </div>
                </div>
                <draggable element="span" v-model="developmentArr" :options="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                    <transition-group name="no" class="list-group" tag="ul" :name="'flip-list'">
                        <li class="list-group-item" v-for="element in developmentArr" :key="element.id">
                            <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
                            <div class="project">
                                {{element.project}}
                            </div>
                            <div class="project-description">{{element.client}} {{element.price}}$</div>
                        </li>
                    </transition-group>
                </draggable>
            </div>

            <div class="wrapper-list">
                <div class="top-part">
                    <div class="top-part__name">
                        <h4>Testing</h4>
                    </div>
                    <div class="top-part__description">
                        <div class="project-count">{{testingObj}} {{testingObj > 1 ? 'projects' : 'project'}}</div>
                        <div class="total-price">${{testingTot}}</div>
                    </div>
                </div>
                <draggable element="span" v-model="testingArr" :options="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                    <transition-group name="no" class="list-group" tag="ul" :name="'flip-list'">
                        <li class="list-group-item" v-for="element in testingArr" :key="element.id">
                            <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
                            <div class="project">
                                {{element.project}}
                            </div>
                            <div class="project-description">{{element.client}} {{element.price}}$</div>
                        </li>
                    </transition-group>
                </draggable>
            </div>

            <div class="wrapper-list">
                <div class="top-part">
                    <div class="top-part__name">
                        <h4>Completed</h4>
                    </div>
                    <div class="top-part__description">
                        <div class="project-count">{{completedObj}} {{completedObj > 1 ? 'projects' : 'project'}}</div>
                        <div class="total-price">${{completedTot}}</div>
                    </div>
                </div>
                <draggable element="span" v-model="completedArr" :options="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                    <transition-group name="no" class="list-group" tag="ul" :name="'flip-list'">
                        <li class="list-group-item" v-for="element in completedArr" :key="element.id">
                            <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
                            <div class="project">
                                {{element.project}}
                            </div>
                            <div class="project-description">{{element.client}} {{element.price}}$</div>
                        </li>
                    </transition-group>
                </draggable>
            </div>

        </div>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    export default {
        name: "Trello",
        components: {
            draggable,
        },
        data () {
            return {
                quened: [
                    {
                        project: 'AI development',
                        client: 'Tesla',
                        fixed: false,
                        price: 5000,
                        id: 1
                    },
                    {
                        project: 'Blockchain integration',
                        client: 'BWM',
                        fixed: false,
                        price: 2500,
                        id: 112
                    },
                    {
                        project: 'Chatbot',
                        client: 'T-Mobile',
                        fixed: false,
                        price: 6500,
                        id: 13
                    }
                ],
                planningArr : [
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
                designArr: [
                    {
                        project: 'Logo design',
                        client: 'Symu.com',
                        fixed: false,
                        price: 2000,
                        id: 19
                    }
                ],
                developmentArr: [
                    {
                        project: 'Mobile App',
                        client: 'Symu.com',
                        fixed: false,
                        price: 1500,
                        id: 111
                    },
                    {
                        project: 'Dashboard',
                        client: 'Standart Oil',
                        fixed: false,
                        price: 5500,
                        id: 1114
                    }
                ],
                testingArr: [
                    {
                        project: 'Landing page',
                        client: 'Symu.com',
                        fixed: false,
                        price: 1500,
                        id: 874
                    }
                ],
                completedArr: [
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
                        id: 8421
                    }
                ],
                planningTot: 0,
                totalQuen: 0,
                editable:true,
                isDragging: false,
                delayedDragging:false,
                planningArrLength: 0,
                quenedTot: 0,
                designTot: 0,
                designObj: 0,
                developTot: 0,
                developObj: 0,
                testingTot: 0,
                testingObj: 0,
                completedTot: 0,
                completedObj: 0
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
            },
            pricesSum(){
                this.planningArr.reduce((prev, cur) => {
                    return this.planningTot = prev + cur.price
                }, 0)
            },
            pricesTotal(){
                this.quened.reduce((prev, cur) => {
                    return this.totalQuen = prev + cur.price
                }, 0)
            },
            checkArr(){
                if(this.planningArr.length === 0) {
                    this.planningTot = 0
                }
            },
            quenedCheck(){
                if(this.quened.length === 0){
                    this.totalQuen = 0
                }
            },
            designCheck(){
              if(this.designArr.length === 0){
                  this.designTot = 0
              }
            },
            devCheck(){
                if(this.developmentArr.length === 0){
                    this.developTot = 0
                }
            },
            completedCheck(){
                if(this.completedArr.length === 0){
                    this.completedTot = 0;
                }
            },
            testCheck(){
                if(this.testingArr.length === 0){
                    this.testingTot = 0
                }
            },
            cardsCount(){
                return this.planningArrLength = this.planningArr.length
            },
            quenedCount(){
                return this.quenedTot = this.quened.length
            },
            designCount(){
                return this.designObj = this.designArr.length
            },
            designPriceCount(){
                this.designArr.reduce((prev, cur) => {
                    return this.designTot = prev + cur.price
                }, 0)
            },
            developmentCount(){
                return this.developObj = this.developmentArr.length
            },
            developmentPriceCount(){
                this.developmentArr.reduce((prev, cur) => {
                    return this.developTot = prev + cur.price
                }, 0)
            },
            testingCount(){
                return this.testingObj = this.testingArr.length
            },
            testingPriceCount(){
                this.testingArr.reduce((prev, cur) => {
                    return this.testingTot = prev + cur.price
                }, 0)
            },
            completedCount(){
                return this.completedObj = this.completedArr.length
            },
            completedPriceCount(){
                this.completedArr.reduce((prev, cur) => {
                    return this.completedTot = prev + cur.price
                }, 0)
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
            }
        },
        watch: {
            isDragging (newValue) {
                if (newValue){
                    this.delayedDragging = true;
                    return
                }
                this.$nextTick( () =>{
                    this.delayedDragging = false;
                    this.pricesSum();
                    this.pricesTotal();
                    this.checkArr();
                    this.cardsCount();
                    this.designCount();
                    this.designPriceCount();
                    this.developmentCount();
                    this.developmentPriceCount();
                    this.testingCount();
                    this.testingPriceCount();
                    this.completedCount();
                    this.completedPriceCount();
                    this.quenedCount();
                    this.quenedCheck();
                    this.designCheck();
                    this.devCheck();
                    this.testCheck();
                    this.completedCheck();
                })
            }
        },
        mounted(){
            this.pricesSum();
            this.pricesTotal();
            this.cardsCount();
            this.quenedCount();
            this.designCount();
            this.designPriceCount();
            this.developmentCount();
            this.developmentPriceCount();
            this.testingCount();
            this.testingPriceCount();
            this.completedCount();
            this.completedPriceCount();
        }
    }
</script>

<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700');

    .trello-wrap{
        background: #2b2d3c;
        flex-basis: 100%;
        padding: 45px;
        overflow-x: scroll;
    }

    .wrapper-list{
        display: flex;
        flex-direction: column;
        font-family: 'Montserrat', sans-serif;

        .top-part{
            &__name{
                h4{
                    margin: 0;
                    font-size: 18px;
                    color: white;
                }
            }
            &__description{
                display: flex;
                margin-top: 10px;

                .project-count{
                    color: #9ea3b4;
                    font-size: 14px;
                    margin-right: 15px;
                }

                .total-price{
                    color: #228be1;
                    font-size: 14px;
                }
            }
        }

        .project{
            color: white;
            margin-bottom: 5px;
        }

        .project-description{
            font-size: 14px;
            color: #9ea3b4;
        }
    }

    .list-holder{
        display: flex;
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
        min-height: 100px;
        padding: 0;
        list-style-type: none;
        margin-right: 20px;
        width: 250px;

        &-item{
            cursor: move;
            margin-bottom: 20px;
            padding: 28px 23px;
            background: #3a3e52;
            border-radius: 5px;

            i{
                cursor: pointer;
            }
        }
    }
</style>