<template>
    <div class="form-wrap">
        <h1>Registration</h1>
        <form>
            <input type="email" placeholder="Email" :class="{'invalid': $v.email.$error}" @blur="$v.email.$touch()"  v-model="email">
            <input type="password" placeholder="Password" :class="{'invalid': $v.password.$error}" @blur="$v.password.$touch()" v-model="password">
        </form>
        <button :disabled="$v.$invalid" @click="getUser">Register</button>
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

<style scoped>

    .form-wrap form input.invalid{
        border: 1px solid red;
    }

    .form-wrap{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex-basis: calc(100% - 260px);
        background: #F7F7F8;
    }

    .form-wrap button{
        cursor: pointer;
        background: transparent;
        border: 1px solid black;
        padding: 5px 20px;
        border-radius: 5px;
    }

    .form-wrap button:focus{
        outline: 0;
    }

    .form-wrap form{
        display: flex;
        flex-direction: column;
    }

    .form-wrap form input{
        margin-bottom: 15px;
        padding: 5px;
        font-size: 14px;
        border-radius: 5px;
        border: 1px solid black;
    }

    .form-wrap form input:focus{
        outline: 0;
    }

    .message{
        color: green;
    }

</style>