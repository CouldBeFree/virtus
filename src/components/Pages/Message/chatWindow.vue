<template>
    <div class="window-item">
        <ul class="chat-holder">
            <li v-for="item in object.messages" :key="item.id">
                <p>{{item.message}}</p>
                <p>{{item.date}}{{item.time}}</p>
            </li>
        </ul>
        <input type="text" v-model="inputVal" @keyup.enter="getInput">
        <button @click="getInput">Click</button>
    </div>
</template>

<script>
    export default {
        name: "chatWindow",
        data(){
          return{
              inputVal: '',
              respond: ['Proin hendrerit libero eu augue tempus porta.', 'Integer scelerisque pharetra nisi ac molestie.', 'Etiam placerat augue ac enim feugiat, et consectetur tellus cursus. Morbi nisi tortor, hendrerit auctor ex fermentum, commodo tempor lacus.', 'Quisque nec orci ac magna finibus porttitor ut id nulla.', 'Pellentesque luctus felis in mi iaculis efficitur.', 'Fusce malesuada molestie erat eu condimentum.', 'Aenean ullamcorper risus volutpat, euismod ipsum eu, luctus augue.', 'Suspendisse elementum metus est.', 'Maecenas feugiat, turpis vitae consectetur ultricies, diam ligula pulvinar augue, at ullamcorper magna felis id justo.', 'Duis maximus id tellus sit amet tempor', 'Nam vitae lorem ullamcorper, auctor nisl at, tempor dolor.']
          }
        },
        methods: {
            getInput(){
                let random = Math.floor(Math.random() * (11 - 1)) + 1;
                let randomID = Math.random();
                let currentDate = new Date();
                let hour = currentDate.getHours();
                let minute = currentDate.getMinutes();
                let message = {
                  message : this.inputVal,
                  time: `${hour} ${minute}`,
                  id: randomID
                };
                if(this.inputVal !== '' ) {
                    this.object.messages.push(message);
                    let autoID = Math.random();
                    this.inputVal = '';
                    let randomRespond = this.respond[random];
                    let randomMessage = {
                        message: randomRespond,
                        time: `${hour} ${minute}`,
                        id: autoID
                    };
                    setTimeout(() => {
                        this.object.messages.push(randomMessage);
                        console.log(randomRespond);
                    }, 3000)
                }
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