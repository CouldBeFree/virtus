<template>
    <div class="form-wrap">
        <p>Registration</p>
        <form>
            <input type="email" placeholder="Email" :class="{'invalid': $v.email.$error}" @blur="$v.email.$touch()"  v-model="email">
            <input type="password" placeholder="Password" :class="{'invalid': $v.password.$error}" @blur="$v.password.$touch()" v-model="password">
        </form>
        <button :disabled="$v.$invalid" @click="getUser">Register</button>
        <p>If u already have account <span class="log" @click="$router.push('/login')">Login</span></p>
        <div class="message" v-show="visible">Registration completed successfully</div>
    </div>
</template>

<script>
    import { required, email, minLength} from 'vuelidate/lib/validators'
    export default {
        data(){
            return{
                email: '',
                password: '',
                disableButton: true,
                visible: false
            }
        },
        validations: {
            email: {
                required,
                email
            },
            password: {
                minLength: minLength(6),
                required
            }
        },
        methods: {
            getUser(){
                const userData = {
                    email: this.email,
                    password: this.password
                };
                this.$http.post('http://localhost:3000/users', userData)
                    .then(response => response.status ? this.visible = true : false);
            }
        }
    }
</script>

<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700');

    .form-wrap form input.invalid{
        border: 1px solid red;
    }

    .log{
        color: red;
        cursor: pointer;
    }

    .form-wrap{
        font-family: 'Montserrat', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex-basis: 100%;
        background: #2A2C3B;

        p{
            color: white;
            font-weight: bold;
            font-size: 19px;
        }

        input{
            border: 1px solid rgba(156, 161, 178, 0.3);
            background-color: #404359;
            border-radius: 10px;
            color: #9ca1b2;
            letter-spacing: 0.32px;
            font-size: 16px;
            padding: 8px 18px;
            margin-bottom: 10px;
        }
    }

    .form-wrap button{
        cursor: pointer;
        background: aliceblue;
        border: none;
        padding: 5px 20px;
        border-radius: 5px;
        color: black;
    }

    .form-wrap button:focus{
        outline: 0;
    }

    .form-wrap form{
        display: flex;
        flex-direction: column;
    }

    .form-wrap form input{
        /*margin-bottom: 15px;
        padding: 5px;
        font-size: 14px;
        border-radius: 5px;
        border: 1px solid black;*/
    }

    .form-wrap form input:focus{
        outline: 0;
    }

    .message{
        color: green;
    }

</style>